import { Request, Response } from 'express';
import { HomePageImage, IHomePageImage, ImageSection, LocationType } from '../Models/HomePageImage';
import cloudinary, { uploadToCloudinary, deleteFromCloudinary } from '../Configuration/Cloudinaryconfig';

export const UploadHomePageImage = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      section,
      locationType,
      altText,
      metadata,
      seo,
      order,
      isActive,
      isFeatured
    } = req.body;

    // Validate  section 
    if(!Object.values(ImageSection).includes(section)) {
      return res.status(400).json({
        message: 'Invalid section value',
        validSections: Object.values(ImageSection)
      });

    }

    // Validate locationType if provided 
    if(locationType && !Object.values(LocationType).includes(locationType)){
      return res.status(400).json({
        message: 'Invalid locationType value',
        validLocationType: Object.values(LocationType)
      });

    }

    // Check  if  the  file exists 
    if(!req.file){
      return res.status(400).json({
        message: 'No  image  file provided'
      });

    }

    // Upload  to  cloudinary  
      const cloudinaryResult = await uploadToCloudinary(req.file.buffer, {
      folder: `trumpet_tours/${section}`,
      resource_type: 'image'
    });

    // Create new  image  document  
    const  newImage = new HomePageImage({
      title,
      description,
      imageUrl: cloudinaryResult.secure_url,
      imagePublicId: cloudinaryResult.public_id,
      section,
      locationType,
      order: order || 0,
      isActive: isActive !== undefined ? isActive : true,
      isFeatured: isFeatured || false,
      altText,
      metadata: {
        ...metadata,
        width: cloudinaryResult.width,
        height: cloudinaryResult.height,
        fileSize: cloudinaryResult.bytes,
        format: cloudinaryResult.format
      },
      seo
    });

    await newImage.save();

    return res.status(201).json({
      message: 'Home page image uploaded successfully',
      data: newImage
    })
  }
  catch  (error : any){
    console.log("Error uploading home page image:", error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error.message
    })
  }
}


// Getting  the  image  by  section  
export  const gettingImageBySection = async(req: Request, res: Response) => {
  try  {

  }
  catch(error: any) {
    console.log("Server  error", error)
    return res.status(500).json({
       message: 'Internal  server  error',
       error: error.message
    })
  }
}


export const gettingImagesBySection = async (req: Request, res: Response) => {
  try {
    const { section} = req.params;

    // Validate section
    if (!Object.values(ImageSection).includes(section as ImageSection)){
      return res.status(400).json({
        status: 'error', 
        message: 'Invalid section value',
        validSections: Object.values(ImageSection)
      });
    }

    // Find active images for the specified section, sorted by order and  creation date 
    const images = await HomePageImage.find({
      section, 
      isActive: true
    }).sort({ order: 1, createdAt: -1});

    // Check if images were found 
    if (!images || images.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: `No images found for the specified section : ${section}`
      });
    }

    // Return success response with images 
    return res.status(200).json({
      status: 'success',
      message: 'Images retrieved successfully',
      data: images,
      count: images.length
    });

  }
  catch(error: any) {
    console.log("Server error", error)
    return res.status(500).json({
        message: 'Internal server error',
        error: error.message
    })
  }
}

// Getting  image  by  LocationType 
export const gettingImagesByLocationType = async (req: Request, res: Response) => {
  try {
    const { locationType } = req.params;

    // Validate locationType 
    if (!Object.values(LocationType).includes(locationType as LocationType)){
      return res.status(400).json({
        status: 'error',
        message: 'Invalid locationType value',
        validLocationTypes: Object.values(LocationType)
      })
    }

    // Find active images for  the  specified locationType
    const images = await HomePageImage.find({
      locationType,
      isActive: true
    }).sort({ order: 1, createAt: -1});

    // Check  if  images were found 
    if (!images || images.length === 0) {
      return res.status(404).json({
        status: 'error',
        message : `No images found for the specified locationType: ${locationType}`
      })
    }

    // Return success response with images 
    return res.status(200).json({
      status: 'success',
      message: 'Images retrieved successfully',
      data: images,
      count: images.length
    })
  }
  catch(error: any){
    console.log("Server  error", error)
    return res.status(500).json({
        message: "Internal server error",
        error: error.message
    })
  }
}

// Method  to Update home  page  image
export const updateHomePageImage = async (req: Request, res: Response) => {
  try {
    const { id} = req.params;

    const {
      title, 
      description,
      section,
      locationType,
      altText,
      metadata,
      seo,
      order,
      isActive,
      isFeatured

    } = req.body;

    // Find existing image 
    const existingImage = await HomePageImage.findById(id);
    if (!existingImage){
      return res.status(404).json({
         status: 'error',
         message: 'Home page image not found'
      });

    }


    // Validate section if provided 
    if (section && !Object.values(ImageSection).includes(section)){
      return res.status(400).json({
        status: 'error',
        message: 'Invalid section value',
        validSections: Object.values(ImageSection)
      })
    }

    // Validate locationType if provided
    if (locationType && !Object.values(LocationType).includes(locationType)){
      return res.status(400).json({
        status: 'error',
        message: 'Invalid locationType value',
        validLocationTypes: Object.values(LocationType)
      })
    }

    // Handle new image upload if  provided
    let imageUpdate = {};
    if (req.file){
      // Delete old image from Cloudinary
      if (existingImage.imagePublicId){
        await deleteFromCloudinary(existingImage.imagePublicId);
      }

      // Upload new image 
      const cloudinaryResult = await uploadToCloudinary(req.file.buffer, {
        folder: `trumpet_tours/${section || existingImage.section}`,
        resource_type: 'image'
      });

      imageUpdate = {
        imageUrl: cloudinaryResult.secure_url,
        imagePublicId: cloudinaryResult.public_id,
        metadata: {
          ...metadata,
          width: cloudinaryResult.width,
          height: cloudinaryResult.height,
          fileSize: cloudinaryResult.bytes,
          format: cloudinaryResult.format
        }
      }
    }

    // Update image Document
    const updatedImage = await HomePageImage.findByIdAndUpdate(
      id,
      {
        $set: {
          title: title ?? existingImage.title,
          description: description ?? existingImage.description,
          section: section ?? existingImage.section,
          locationType: locationType ?? existingImage.locationType,
          altText: altText ?? existingImage.altText,
          metadata: metadata ?? existingImage.metadata,
          seo: seo ?? existingImage.seo,
          order: order !== undefined ? order : existingImage.order,
          isActive: isActive !== undefined ? isActive : existingImage.isActive,
          isFeatured: isFeatured !== undefined ? isFeatured : existingImage.isFeatured,
          ...imageUpdate
        }
      },
      { new: true }
    );

    if (!updatedImage) {
      return res.status(404).json({
        status: 'error',
        message: 'Failed to update home page image'
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Home page image updated successfully',
      data: updatedImage
    });
  }
  catch (error: any) {
    console.log("Error updating home page image:", error)
    return res.status(500).json({
       message: 'Internal server error',
       error: error.message
    })
  }
}

