import mongoose, {Document, Schema} from "mongoose";
import bcrypt from 'bcryptjs'; 

export interface User extends Document{
    FirstName: string;
    LastName: string;
    email: string;
    password: string;
}

const userSchema: Schema = new mongoose.Schema({
    Firstname: {type: String, required:true},
    LastName: {type: String, required:true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true}

},{ timestamps: true }
);

userSchema.pre<User>('save', async function (next) {
    const user = this; 
    if(!user.isModified('password'))
    {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password , salt);

    user.password = hash;
    return next();
    
});

export default mongoose.model<User>("User", userSchema)