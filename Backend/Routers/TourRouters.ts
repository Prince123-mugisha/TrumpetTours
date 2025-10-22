import express from 'express';
import multer from 'multer';
import {
  createTour,
  getAllTours,
  getToursByCategory,
  getToursByDestination,
  getFeaturedTours,
  getTourById,
  updateTour,
  deleteTour,
  toggleTourFeatured,
  updateTourStatus,
  searchTours
} from '../Controllers/Tour';
import { verifyToken, isAdmin } from '../Configuration/AuthMiddleware';

const router = express.Router();

// Configure multer for image uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check file type
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Public routes (no authentication required)
// Get tours by category (for frontend display)
router.get('/category/:category', getToursByCategory);

// Get tours by destination (for frontend display)
router.get('/destination/:destination', getToursByDestination);

// Get featured tours (for frontend display)
router.get('/featured', getFeaturedTours);

// Get a single tour by ID or slug (public)
router.get('/:id', getTourById);

// Search tours (public)
router.get('/search', searchTours);

// Protected routes (authentication required)
// Create a new tour
router.post('/', verifyToken, isAdmin, upload.single('image'), createTour);

// Get all tours with filtering and pagination (admin)
router.get('/', verifyToken, isAdmin, getAllTours);

// Update a tour
router.put('/:id', verifyToken, isAdmin, upload.single('image'), updateTour);

// Delete a tour
router.delete('/:id', verifyToken, isAdmin, deleteTour);

// Toggle tour featured status
router.patch('/:id/toggle-featured', verifyToken, isAdmin, toggleTourFeatured);

// Update tour status
router.patch('/:id/status', verifyToken, isAdmin, updateTourStatus);

export default router;

