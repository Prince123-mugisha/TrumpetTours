import express from 'express';
import multer from 'multer';
import { verifyToken, isAdmin } from '../Configuration/AuthMiddleware';
import { 
    UploadHomePageImage,
    gettingImageBySection,
    gettingImagesByLocationType,
    updateHomePageImage
} from '../Controllers/HomePageImage';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { 
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
});

// Public routes
router.get('/section/:section', gettingImageBySection);
router.get('/location/:locationType', gettingImagesByLocationType);

// Protected routes (require authentication and admin privileges)
router.post('/upload', verifyToken, isAdmin, upload.single('image'), UploadHomePageImage);
router.patch('/update/:id', verifyToken, isAdmin, upload.single('image'), updateHomePageImage);

export default router;
