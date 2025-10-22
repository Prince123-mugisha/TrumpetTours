import express from 'express';
import {
  createService,
  getAllServices,
  getServicesByCategory,
  getFeaturedServices,
  getServicesByDestination,
  getServiceById,
  updateService,
  deleteService,
  toggleServiceFeatured,
  updateServiceOrder,
  updateServiceStatus
} from '../Controllers/Service';
import { verifyToken, isAdmin } from '../Configuration/AuthMiddleware';

const router = express.Router();

// Public routes (no authentication required)
// Get services by category (for frontend display)
router.get('/category/:category', getServicesByCategory);

// Get services by destination (for frontend display)
router.get('/destination/:destination', getServicesByDestination);

// Get featured services (for frontend display)
router.get('/featured', getFeaturedServices);

// Get a single service by ID or slug (public)
router.get('/:id', getServiceById);

// Protected routes (authentication required)
// Create a new service
router.post('/', verifyToken, isAdmin, createService);

// Get all services with filtering and pagination (admin)
router.get('/', verifyToken, isAdmin, getAllServices);

// Update a service
router.put('/:id', verifyToken, isAdmin, updateService);

// Delete a service
router.delete('/:id', verifyToken, isAdmin, deleteService);

// Toggle service featured status
router.patch('/:id/toggle-featured', verifyToken, isAdmin, toggleServiceFeatured);

// Update service order
router.patch('/order', verifyToken, isAdmin, updateServiceOrder);

// Update service status
router.patch('/:id/status', verifyToken, isAdmin, updateServiceStatus);

export default router;

