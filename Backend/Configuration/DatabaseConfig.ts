import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const  MONGO_URI = process.env.DB_CONNECTION || '';

export async function connectDB(): Promise<void> {
    if (!MONGO_URI){
        throw new Error('Database connection string is not defined in environment variables.');
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    }catch (error){
        console.error('Database connectio error : ', error);

        // Exist so  process manager can restart if needed 
        process.exit(1);
    }
}


export default connectDB;
