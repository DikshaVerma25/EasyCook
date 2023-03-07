import mongoose, {Document, Schema} from "mongoose";

export interface User extends Document{
    FirstName: string;
    LastName: string;
    email: string;
    password: string;
}

const userSchema: Schema = new mongoose.Schema({
    Firstname: {type: String, required:true},
    LastName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}

});

export default mongoose.model<User>("User", userSchema)