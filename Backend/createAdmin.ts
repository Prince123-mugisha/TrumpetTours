import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from './Models/Users';

// Load env from the correct path
dotenv.config({ path: path.join(__dirname, '.env') });

// Get MongoDB URI and assert it exists
const MONGO_URI = process.env.DB_CONNECTION;
if (!MONGO_URI) {
    console.error('Missing DB_CONNECTION in environment variables');
    process.exit(1);
}

async function run() {
    try {
        console.log('Connecting to MongoDB...');
        // Type assertion here is safe because we checked MONGO_URI above
        await mongoose.connect(MONGO_URI as string);
        console.log('Connected successfully to MongoDB');

        const userData = {
            fullName: 'Kagame Dan',
            email: 'admin@example.com',
            password: 'password123',
            role: 'admin' as const
        };

        const existingAdmin = await UserModel.findOne({ email: userData.email });

        if (existingAdmin) {
            console.log('Admin user already exists. Exiting...');
            return;
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newAdmin = new UserModel({
            fullName: userData.fullName,
            email: userData.email,
            password: hashedPassword,
            role: userData.role
        });

        await newAdmin.save();
        console.log('Admin user created successfully.');

    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

run().catch(error => {
    console.error('Error creating admin user:', error);
    process.exit(1);
});