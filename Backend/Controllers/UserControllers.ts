import { Request, Response } from "express";
import UserModel from "../Models/Users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Method  of  login  Admin 
export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const { email, password} = req.body;

        // Validate inpout
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find admin user by email
        const admin = await UserModel.findOne({
            email, role: "admin"
        });

        if (!admin) {
            return res.status(401).json({
                messgae: "Invalid email or password"
            })
        }

        //Verify password
        const isValidPassword = await bcrypt.compare(password, admin.password);
        if (!isValidPassword){
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                id: admin._id,
                email: admin.email,
                role: admin.role
            },
            process.env.JWT_SECRET || "your_jwt_secret",
            { expiresIn: "1h" }
        );

        // send  response
        return res.status(200).json({
            message: "Admin logged in successfully",
            token
        });
    }
    catch (error: any){
        console.error("Error during admin login:", error);
        return res.status(500).json({ message : "Internal sever error"});
    }
}


// Method  of  getting  the  admin profile from  jwt token 
export const getAdminProfile = async (req: Request, res: Response) => {
    try {
        // Get user from  request (set by auth middleware)
        const user = req.user?.id;

        if (!user){
            return res.status(401).json({
                message: "Authentication required"
            })
        }

        // find Admin by id (exclude password)
        const admin = await UserModel.findOne({
            _id: user, role : "admin"
        }, 
        { password: 0 });

        if (!admin){
            return res.status(404).json({
                message: "Admin not found"
            })
        }

        // return admin profile
        return res.status(200).json({
            message: "Admin profile fetched successfully",
            admin: {
                id: admin._id,
                fullName: admin.fullName,
                email: admin.email,
                role: admin.role,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt
            }
        })

    }
    catch (error: any){
        console.error("Error fetching admin profile: ", error);
        return res.status(500).json({ 
            message: "Internal server error",
            error: error.message
        });
    }
}

// Method  of adding  new admin  to  database
export const addNewAdmin = async (req: Request, res: Response) => {
     try  {
        const { fullName, email, password} = req.body;

        // Validate input 
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required (fullName, email, password)"
            });

        }

       // Check if email already exists
       const existingAdmin = await UserModel.findOne({
        email, role: "admin"
       });
       
       if (existingAdmin){
        return res.status(409).json({
            message: "Admin with this email already exists"
        })
       }
         // Hash password
         const hashedPassword = await bcrypt.hash(password, 10);

         // Create new admin user
         const newAdmin = new UserModel({
            fullName,
            email,
            password: hashedPassword,
            role: "admin"
         })

         await newAdmin.save();

         // send response
         return res.status(201).json({
            message: "New admin added successfully",
            admin: {
                id: newAdmin._id,
                fullName: newAdmin.fullName,
                email: newAdmin.email,
                role: newAdmin.role,
                createdAt: newAdmin.createdAt,
                updatedAt: newAdmin.updatedAt
            }
         });
     }
     catch (error: any){
        console.error("Error adding new admin: ", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
     }
}

// Method  of  getting  all  admins from database
export const getAllAdmins = async (req: Request, res: Response) => {
    try {
        // Find all admins (exclude passwords)
        const admins = await UserModel.find({ role: "admin" }, { password: 0 });

        // send response
        return res.status(200).json({
            message: "Admins fetched successfully",
            admins: admins.map(admin => ({
                id: admin._id,
                fullName: admin.fullName,
                email: admin.email,
                role: admin.role,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt
            }))
        });
    }
    catch (error: any){
        console.error("Error fetching admins: ", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// Method  of  deleting  an  admin by  id
export const getAdminById  = async (req: Request, res: Response) => {
    try {
        const adminId = req.params.id;

        // Find admin by id (exclude password)
        const admin = await UserModel.findOne({
            _id: adminId, role: "admin"
        }, 
        { password: 0 });

        if (!admin){
            return res.status(404).json({
                message: "Admin not found"
            });
        }

        // send response
        return res.status(200).json({
            message: "Admin fetched successfully",
            admin: {
                id: admin._id,
                fullName: admin.fullName,
                email: admin.email,
                role: admin.role,
                createdAt: admin.createdAt,
                updatedAt: admin.updatedAt
            }
        });
    }
    catch (error: any){
        console.error("Error fetching admin by id: ", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}


// Method  of  deleting  an  admin by  id
export const deleteAdminById  = async (req: Request, res: Response) => {
    try {
        const adminId = req.params.id;

        // Delete admin by id
        const deletedAdmin = await UserModel.findOneAndDelete({
            _id: adminId, role: "admin"
        });

        if (!deletedAdmin){
            return res.status(404).json({
                message: "Admin not found"
            });
        }

        // send response
        return res.status(200).json({
            message: "Admin deleted successfully"
        });
    }
    catch (error: any){
        console.error("Error deleting admin by id: ", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}