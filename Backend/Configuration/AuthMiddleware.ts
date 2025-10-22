import  {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../Models/Users';

// Extend the Request type to include user
declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const generateToken = (user: IUser): string => {
    return jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
};


export const verifyToken  = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                message: 'No token provided'
            })
        }
        const decoded = jwt.verify(token, JWT_SECRET) as IUser;
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
}

// Middleware to check for admin role 
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === 'admin'){
        next();
    }else {
        res.status(403).json({
            message: 'Access denied, admin only'
        });
    }
}