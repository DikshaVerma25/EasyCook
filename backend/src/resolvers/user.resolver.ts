import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User, IUser } from '../models/User';

const JWT_SECRET = 'my_secret_key';

interface ILoginInput{

    email: String;
    password: String;

}

interface IAuthPayLoad{
    token: String;
}

export const userResolver={
    Mutation:{
        login: async(
            parent: any,
            {input}: {input: ILoginInput},
            context: any,
            info: any
            ):Promise<IAuthPayLoad>=> {
                const{email , password} = input;
                const user: IUser | null = await User.findOne({email});
                if(!user){
                    throw new Error ('Invalid User/credentials');                    
                }  
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch){
                    throw new Error ('Invalid User/credentials'); 
                }
                const token = jwt.sign({userId: user.id} , JWT_SECRET);
                return {token};
            },
        },

};