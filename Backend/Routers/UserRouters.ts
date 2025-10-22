import  express  from "express";
import {
    loginAdmin, 
    getAdminProfile, 
    addNewAdmin, 
    getAllAdmins, 
    getAdminById, 
    deleteAdminById 
} from "../Controllers/UserControllers";
import { verifyToken, isAdmin } from "../Configuration/AuthMiddleware";

const router = express.Router();

// Public route
router.post("/login", loginAdmin);

// Protected routes
router.get("/profile", verifyToken, isAdmin, getAdminProfile);
router.post("/add", verifyToken, isAdmin, addNewAdmin);
router.get("/all", verifyToken, isAdmin, getAllAdmins);
router.get("/:id", verifyToken, isAdmin, getAdminById);
router.delete("/:id", verifyToken, isAdmin, deleteAdminById);

export default router;