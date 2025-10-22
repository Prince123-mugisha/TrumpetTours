import  mongoose , {Document, mongo, Schema} from 'mongoose';

export interface IUser extends Document {
    fullName : string;
    email : string;
    password : string;
    role : 'admin';
    createdAt : Date;
    updatedAt : Date;
}

const UserSchema : Schema = new Schema(
    {
        fullName : {
            type : String,
            required : true,
        }, 
        email : {
            type : String,
            required: true,
            unique : true,    
        },
        password : {
            type : String,
            required : true,
        }, 
        role : {
            type : String,
            enum : ['admin'],
            default : 'admin',
        }
    }
);
 const UserModel  =  mongoose.model<IUser>('User', UserSchema);
 export default UserModel;