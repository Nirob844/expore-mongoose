import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    return user;
};

export const getUserToDb = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

  // const user = await new User({
    //     id: '666',
    //     role: "student",
    //     password: 'nirob',
    //     name: {
    //         firstName: 'Nirob',
    //         lastName: 'Hasan',
    //     },
    //     gender: "male",
    //     email: 'nirob@ahn.com',
    //     contactNo: '01785541',
    //     emergencyContactNo: '01785541',
    //     presentAddress: 'Dhaka',
    //     permanentAddress: 'Dhaka',
    // });