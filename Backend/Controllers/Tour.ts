import { Request, Response } from 'express';
import Tour, { ITour, TourCategory, Destination, DifficultyLevel, TourStatus } from '../Models/Tour';
import { uploadToCloudinary, deleteFromCloudinary } from '../Configuration/Cloudinaryconfig';

// Interface for tour creation request
interface TourCreateRequest extends Request {
  body: {
    title: string;
    description: string;
    shortDescription?: string;
    category: TourCategory;
    destination: Destination;
    difficulty?: DifficultyLevel;
    duration: string;
    durationDays: number;
    durationNights: number;
    price: number;
    currency?: string;
    itinerary: any[];
    inclusions: string[];
    exclusions: string[];
    highlights: string[];
    requirements: string[];
    bestTimeToVisit: string[];
    groupSize: { min: number; max: number };
    ageRestrictions?: { minAge?: number; maxAge?: number; note?: string };
    physicalFitness: string;
    isFeatured?: boolean;
    status?: TourStatus;
    tags: string[];
    seoTitle?: string;
    seoDescription?: string;
    bookingInfo: {
      advanceBookingDays: number;
      cancellationPolicy: string;
      refundPolicy: string;
    };
    location: {
      country: string;
      region?: string;
      coordinates?: { lat: number; lng: number };
    };
  };
  file?: Express.Multer.File;
}

// Interface for tour update request
interface TourUpdateRequest extends Request {
  body: {
    title?: string;
    description?: string;
    shortDescription?: string;
    category?: TourCategory;
    destination?: Destination;
    difficulty?: DifficultyLevel;
    duration?: string;
    durationDays?: number;
    durationNights?: number;
    price?: number;
    currency?: string;
    itinerary?: any[];
    inclusions?: string[];
    exclusions?: string[];
    highlights?: string[];
    requirements?: string[];
    bestTimeToVisit?: string[];
    groupSize?: { min: number; max: number };
    ageRestrictions?: { minAge?: number; maxAge?: number; note?: string };
    physicalFitness?: string;
    isFeatured?: boolean;
    status?: TourStatus;
    tags?: string[];
    seoTitle?: string;
    seoDescription?: string;
    bookingInfo?: {
      advanceBookingDays: number;
      cancellationPolicy: string;
      refundPolicy: string;
    };
    location?: {
      country: string;
      region?: string;
      coordinates?: { lat: number; lng: number };
    };
    imageUrl?: string;
    imagePublicId?: string;
  };
  file?: Express.Multer.File;
}

// Create a new tour
export const createTour = async (req: TourCreateRequest, res: Response) => {
  try {
    const {
      title,
      description,
      shortDescription,
      category,
      destination,
      difficulty = DifficultyLevel.MODERATE,
      duration,
      durationDays,
      durationNights,
      price,
      currency = 'USD',
      itinerary,
      inclusions,
      exclusions,
      highlights,
      requirements,
      bestTimeToVisit,
      groupSize,
      ageRestrictions,
      physicalFitness,
      isFeatured = false,
      status = TourStatus.ACTIVE,
      tags = [],
      seoTitle,
      seoDescription,
      bookingInfo,
      location
    } = req.body;

    // Validate required fields
    if (!title || !description || !category || !destination || !duration || !price || !physicalFitness) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, category, destination, duration, price, and physical fitness are required fields'
      });
    }

    // Validate file upload
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Tour image is required'
      });
    }

    // Upload image to Cloudinary
    const uploadResult = await uploadToCloudinary(req.file.buffer, {
      folder: `tours/${category}`,
      transformation: [
        { width: 1200, height: 800, crop: 'fill', quality: 'auto' },
        { format: 'auto' }
      ]
    });

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Create new tour document
    const newTour = new Tour({
      title,
      description,
      shortDescription,
      category,
      destination,
      difficulty,
      duration,
      durationDays,
      durationNights,
      price,
      currency,
      imageUrl: uploadResult.secure_url,
      imagePublicId: uploadResult.public_id,
      itinerary,
      inclusions,
      exclusions,
      highlights,
      requirements,
      bestTimeToVisit,
      groupSize,
      ageRestrictions,
      physicalFitness,
      isFeatured,
      status,
      tags,
      seoTitle,
      seoDescription,
      slug,
      bookingInfo,
      location
    });

    const savedTour = await newTour.save();

    res.status(201).json({
      success: true,
      message: 'Tour created successfully',
      data: savedTour
    });

  } catch (error: any) {
    console.error('Error creating tour:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create tour',
      error: error.message
    });
  }
};

// Get all tours with optional filtering
export const getAllTours = async (req: Request, res: Response) => {
  try {
    const {
      category,
      destination,
      difficulty,
      status,
      isFeatured,
      minPrice,
      maxPrice,
      minDays,
      maxDays,
      search,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter: any = {};
    
    if (category) filter.category = category;
    if (destination) filter.destination = destination;
    if (difficulty) filter.difficulty = difficulty;
    if (status) filter.status = status;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';
    
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    
    if (minDays || maxDays) {
      filter.durationDays = {};
      if (minDays) filter.durationDays.$gte = Number(minDays);
      if (maxDays) filter.durationDays.$lte = Number(maxDays);
    }

    // Add search functionality
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search as string, 'i')] } }
      ];
    }

    // Build sort object
    const sort: any = {};
    sort[sortBy as string] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (Number(page) - 1) * Number(limit);

    // Execute query
    const tours = await Tour.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    const total = await Tour.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: 'Tours retrieved successfully',
      data: {
        tours,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(total / Number(limit)),
          totalTours: total,
          hasNext: skip + tours.length < total,
          hasPrev: Number(page) > 1
        }
      }
    });

  } catch (error: any) {
    console.error('Error retrieving tours:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tours',
      error: error.message
    });
  }
};

// Get tours by category
export const getToursByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const { destination, difficulty } = req.query;

    if (!Object.values(TourCategory).includes(category as TourCategory)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid tour category provided'
      });
    }

    const filter: any = { 
      category: category as TourCategory, 
      status: TourStatus.ACTIVE 
    };

    if (destination) filter.destination = destination;
    if (difficulty) filter.difficulty = difficulty;

    const tours = await Tour.find(filter)
      .sort({ isFeatured: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      message: `Tours for ${category} category retrieved successfully`,
      data: tours
    });

  } catch (error: any) {
    console.error('Error retrieving tours by category:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tours by category',
      error: error.message
    });
  }
};

// Get tours by destination
export const getToursByDestination = async (req: Request, res: Response) => {
  try {
    const { destination } = req.params;
    const { category, difficulty } = req.query;

    if (!Object.values(Destination).includes(destination as Destination)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid destination provided'
      });
    }

    const filter: any = { 
      destination: destination as Destination, 
      status: TourStatus.ACTIVE 
    };

    if (category) filter.category = category;
    if (difficulty) filter.difficulty = difficulty;

    const tours = await Tour.find(filter)
      .sort({ isFeatured: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      message: `Tours for ${destination} destination retrieved successfully`,
      data: tours
    });

  } catch (error: any) {
    console.error('Error retrieving tours by destination:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tours by destination',
      error: error.message
    });
  }
};

// Get featured tours
export const getFeaturedTours = async (req: Request, res: Response) => {
  try {
    const { category, destination, limit = 6 } = req.query;

    const filter: any = { 
      isFeatured: true, 
      status: TourStatus.ACTIVE 
    };

    if (category) filter.category = category;
    if (destination) filter.destination = destination;

    const tours = await Tour.find(filter)
      .sort({ createdAt: -1 })
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: 'Featured tours retrieved successfully',
      data: tours
    });

  } catch (error: any) {
    console.error('Error retrieving featured tours:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve featured tours',
      error: error.message
    });
  }
};

// Get a single tour by ID or slug
export const getTourById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Try to find by ID first, then by slug
    const tour = await Tour.findOne({
      $or: [
        { _id: id },
        { slug: id }
      ]
    });

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Tour retrieved successfully',
      data: tour
    });

  } catch (error: any) {
    console.error('Error retrieving tour:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tour',
      error: error.message
    });
  }
};

// Update a tour
export const updateTour = async (req: TourUpdateRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Find the existing tour
    const existingTour = await Tour.findById(id);
    if (!existingTour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found'
      });
    }

    // If a new image file is provided, upload it and delete the old one
    if (req.file) {
      // Upload new image
      const uploadResult = await uploadToCloudinary(req.file.buffer, {
        folder: `tours/${updateData.category || existingTour.category}`,
        transformation: [
          { width: 1200, height: 800, crop: 'fill', quality: 'auto' },
          { format: 'auto' }
        ]
      });

      // Delete old image from Cloudinary
      await deleteFromCloudinary(existingTour.imagePublicId);

      // Update image data
      updateData.imageUrl = uploadResult.secure_url;
      updateData.imagePublicId = uploadResult.public_id;
    }

    // Update slug if title is changed
    if (updateData.title && updateData.title !== existingTour.title) {
      (updateData as any).slug = updateData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Tour updated successfully',
      data: updatedTour
    });

  } catch (error: any) {
    console.error('Error updating tour:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update tour',
      error: error.message
    });
  }
};

// Delete a tour
export const deleteTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found'
      });
    }

    // Delete image from Cloudinary
    await deleteFromCloudinary(tour.imagePublicId);

    // Delete gallery images from Cloudinary
    if (tour.galleryImages && tour.galleryImages.length > 0) {
      for (const galleryImage of tour.galleryImages) {
        await deleteFromCloudinary(galleryImage.publicId);
      }
    }

    // Delete tour from database
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Tour deleted successfully'
    });

  } catch (error: any) {
    console.error('Error deleting tour:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete tour',
      error: error.message
    });
  }
};

// Toggle tour featured status
export const toggleTourFeatured = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found'
      });
    }

    tour.isFeatured = !tour.isFeatured;
    await tour.save();

    res.status(200).json({
      success: true,
      message: `Tour ${tour.isFeatured ? 'featured' : 'unfeatured'} successfully`,
      data: tour
    });

  } catch (error: any) {
    console.error('Error toggling tour featured status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to toggle tour featured status',
      error: error.message
    });
  }
};

// Update tour status
export const updateTourStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!Object.values(TourStatus).includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid tour status provided'
      });
    }

    const tour = await Tour.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Tour status updated successfully',
      data: tour
    });

  } catch (error: any) {
    console.error('Error updating tour status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update tour status',
      error: error.message
    });
  }
};

// Search tours
export const searchTours = async (req: Request, res: Response) => {
  try {
    const { q, category, destination, minPrice, maxPrice, minDays, maxDays } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const filter: any = {
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { tags: { $in: [new RegExp(q as string, 'i')] } }
      ],
      status: TourStatus.ACTIVE
    };

    if (category) filter.category = category;
    if (destination) filter.destination = destination;
    
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }
    
    if (minDays || maxDays) {
      filter.durationDays = {};
      if (minDays) filter.durationDays.$gte = Number(minDays);
      if (maxDays) filter.durationDays.$lte = Number(maxDays);
    }

    const tours = await Tour.find(filter)
      .sort({ isFeatured: -1, createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'Search results retrieved successfully',
      data: tours
    });

  } catch (error: any) {
    console.error('Error searching tours:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search tours',
      error: error.message
    });
  }
};
