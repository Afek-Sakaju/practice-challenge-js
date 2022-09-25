import { UserModel } from '../models/user.model';
import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interface';

export async function registerUser(user: IUser): Promise<IUser | undefined> {
    const userDoc = new UserModel(user);

    const result: any = await userDoc.save();

    return result.toJSON();
}

export async function updateUserData(data: IUser): Promise<IUser | undefined> {
    const result: any = await UserModel.findOneAndUpdate(
        { _id: data._id },
        {
            password: data.password
                ? bcrypt.hashSync(data.password, bcrypt.genSaltSync(10))
                : password,
        },
        ...(data.fullName!==undefined && fullName:data.fullName),
        { phoneNumber: data.phoneNumber ? data.phoneNumber : phoneNumber },
        {
            returnOriginal: false,
        }
        //fix me
    );

    return result;
}
