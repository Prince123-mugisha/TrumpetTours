import {v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const storage = new CloudinaryStorage({
    cloudinary, 
    params: {
        folder: process.env.CLOUDINARY_FOLDER || 'trumpet_tours',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [{ width: 1600, crop: 'limit'}],
        
    } as any
});

// Upload function for buffer uploads
export const uploadToCloudinary = async (buffer: Buffer, options: any = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                ...options,
                resource_type: 'auto'
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        ).end(buffer);
    });
};

// Delete function
export const deleteFromCloudinary = async (publicId: string) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error('Error deleting from Cloudinary:', error);
        throw error;
    }
};

export default cloudinary;