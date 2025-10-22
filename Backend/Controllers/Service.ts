import { Request, Response } from 'express';
import Service, { IService, ServiceCategory, ServiceStatus } from '../Models/Service';

// Interface for service creation request
interface ServiceCreateRequest extends Request {
  body: {
    title: string;
    description: string;
    shortDescription?: string;
    category: ServiceCategory;
    icon?: string;
    features: string[];
    benefits: string[];
    pricing?: {
      startingFrom: number;
      currency: string;
      pricingModel: 'per_person' | 'per_group' | 'per_day' | 'fixed';
      includes: string[];
      excludes: string[];
    };
    availability: {
      destinations: string[];
      duration?: string;
      groupSize?: { min: number; max: number };
    };
    requirements?: string[];
    inclusions: string[];
    exclusions: string[];
    isFeatured?: boolean;
    status?: ServiceStatus;
    order?: number;
    tags: string[];
    seoTitle?: string;
    seoDescription?: string;
  };
}

// Interface for service update request
interface ServiceUpdateRequest extends Request {
  body: {
    title?: string;
    description?: string;
    shortDescription?: string;
    category?: ServiceCategory;
    icon?: string;
    features?: string[];
    benefits?: string[];
    pricing?: {
      startingFrom: number;
      currency: string;
      pricingModel: 'per_person' | 'per_group' | 'per_day' | 'fixed';
      includes: string[];
      excludes: string[];
    };
    availability?: {
      destinations: string[];
      duration?: string;
      groupSize?: { min: number; max: number };
    };
    requirements?: string[];
    inclusions?: string[];
    exclusions?: string[];
    isFeatured?: boolean;
    status?: ServiceStatus;
    order?: number;
    tags?: string[];
    seoTitle?: string;
    seoDescription?: string;
  };
}

// Create a new service
export const createService = async (req: ServiceCreateRequest, res: Response) => {
  try {
    const {
      title,
      description,
      shortDescription,
      category,
      icon,
      features,
      benefits,
      pricing,
      availability,
      requirements,
      inclusions,
      exclusions,
      isFeatured = false,
      status = ServiceStatus.ACTIVE,
      order = 0,
      tags = [],
      seoTitle,
      seoDescription
    } = req.body;

    // Validate required fields
    if (!title || !description || !category || !availability) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, category, and availability are required fields'
      });
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Create new service document
    const newService = new Service({
      title,
      description,
      shortDescription,
      category,
      icon,
      features,
      benefits,
      pricing,
      availability,
      requirements,
      inclusions,
      exclusions,
      isFeatured,
      status,
      order,
      tags,
      seoTitle,
      seoDescription,
      slug
    });

    const savedService = await newService.save();

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: savedService
    });

  } catch (error: any) {
    console.error('Error creating service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create service',
      error: error.message
    });
  }
};

// Get all services with optional filtering
export const getAllServices = async (req: Request, res: Response) => {
  try {
    const {
      category,
      status,
      isFeatured,
      destination,
      page = 1,
      limit = 10,
      sortBy = 'order',
      sortOrder = 'asc'
    } = req.query;

    // Build filter object
    const filter: any = {};
    
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';
    if (destination) filter['availability.destinations'] = destination;

    // Build sort object
    const sort: any = {};
    sort[sortBy as string] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (Number(page) - 1) * Number(limit);

    // Execute query
    const services = await Service.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    const total = await Service.countDocuments(filter);

    res.status(200).json({
      success: true,
      message: 'Services retrieved successfully',
      data: {
        services,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(total / Number(limit)),
          totalServices: total,
          hasNext: skip + services.length < total,
          hasPrev: Number(page) > 1
        }
      }
    });

  } catch (error: any) {
    console.error('Error retrieving services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve services',
      error: error.message
    });
  }
};

// Get services by category
export const getServicesByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;

    if (!Object.values(ServiceCategory).includes(category as ServiceCategory)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service category provided'
      });
    }

    const services = await Service.find({ 
      category: category as ServiceCategory, 
      status: ServiceStatus.ACTIVE 
    }).sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      message: `Services for ${category} category retrieved successfully`,
      data: services
    });

  } catch (error: any) {
    console.error('Error retrieving services by category:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve services by category',
      error: error.message
    });
  }
};

// Get featured services
export const getFeaturedServices = async (req: Request, res: Response) => {
  try {
    const { category, destination, limit = 4 } = req.query;

    const filter: any = { 
      isFeatured: true, 
      status: ServiceStatus.ACTIVE 
    };

    if (category) filter.category = category;
    if (destination) filter['availability.destinations'] = destination;

    const services = await Service.find(filter)
      .sort({ order: 1, createdAt: -1 })
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: 'Featured services retrieved successfully',
      data: services
    });

  } catch (error: any) {
    console.error('Error retrieving featured services:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve featured services',
      error: error.message
    });
  }
};

// Get services by destination
export const getServicesByDestination = async (req: Request, res: Response) => {
  try {
    const { destination } = req.params;
    const { category } = req.query;

    const filter: any = { 
      'availability.destinations': destination, 
      status: ServiceStatus.ACTIVE 
    };

    if (category) filter.category = category;

    const services = await Service.find(filter)
      .sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      message: `Services for ${destination} destination retrieved successfully`,
      data: services
    });

  } catch (error: any) {
    console.error('Error retrieving services by destination:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve services by destination',
      error: error.message
    });
  }
};

// Get a single service by ID or slug
export const getServiceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Try to find by ID first, then by slug
    const service = await Service.findOne({
      $or: [
        { _id: id },
        { slug: id }
      ]
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Service retrieved successfully',
      data: service
    });

  } catch (error: any) {
    console.error('Error retrieving service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve service',
      error: error.message
    });
  }
};

// Update a service
export const updateService = async (req: ServiceUpdateRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Find the existing service
    const existingService = await Service.findById(id);
    if (!existingService) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Update slug if title is changed
    if (updateData.title && updateData.title !== existingService.title) {
      (updateData as any).slug = updateData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Service updated successfully',
      data: updatedService
    });

  } catch (error: any) {
    console.error('Error updating service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update service',
      error: error.message
    });
  }
};

// Delete a service
export const deleteService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Delete service from database
    await Service.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Service deleted successfully'
    });

  } catch (error: any) {
    console.error('Error deleting service:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete service',
      error: error.message
    });
  }
};

// Toggle service featured status
export const toggleServiceFeatured = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    service.isFeatured = !service.isFeatured;
    await service.save();

    res.status(200).json({
      success: true,
      message: `Service ${service.isFeatured ? 'featured' : 'unfeatured'} successfully`,
      data: service
    });

  } catch (error: any) {
    console.error('Error toggling service featured status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to toggle service featured status',
      error: error.message
    });
  }
};

// Update service order
export const updateServiceOrder = async (req: Request, res: Response) => {
  try {
    const { services } = req.body; // Array of { id, order }

    if (!Array.isArray(services)) {
      return res.status(400).json({
        success: false,
        message: 'Services must be an array'
      });
    }

    const updatePromises = services.map(({ id, order }: { id: string; order: number }) =>
      Service.findByIdAndUpdate(id, { order }, { new: true })
    );

    await Promise.all(updatePromises);

    res.status(200).json({
      success: true,
      message: 'Service order updated successfully'
    });

  } catch (error: any) {
    console.error('Error updating service order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update service order',
      error: error.message
    });
  }
};

// Update service status
export const updateServiceStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!Object.values(ServiceStatus).includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service status provided'
      });
    }

    const service = await Service.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Service status updated successfully',
      data: service
    });

  } catch (error: any) {
    console.error('Error updating service status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update service status',
      error: error.message
    });
  }
};
