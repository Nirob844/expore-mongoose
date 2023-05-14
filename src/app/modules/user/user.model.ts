import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";


type UserModel = Model<IUser, {}, IUserMethods>;

// Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
});

//static 
userSchema.static('getAdminUser', async function getAdminUser() {
    const admins = await this.find({ role: 'admin' });
    return admins;
});
//instance methods
userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

const User = model<IUser, UserModel>('User', userSchema);

export default User;