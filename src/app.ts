import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { Schema, model } from 'mongoose';

const app: Application = express();

//using cors
app.use(cors());

//perse cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {

    //creating an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }
    // Create a Schema corresponding to the document interface.
    const userSchema = new Schema<IUser>({
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

    const createUserToDb = async () => {
        const User = model<IUser>('User', userSchema);
        const user = new User({
            id: '777',
            role: "student",
            password: 'nirob',
            name: {
                firstName: 'Nirob',
                lastName: 'Hasan',
            },
            gender: "male",
            email: 'nirob@ahn.com',
            contactNo: '01785541',
            emergencyContactNo: '01785541',
            presentAddress: 'Dhaka',
            permanentAddress: 'Dhaka',
        });
        await user.save();
        console.log(user);

    };
    createUserToDb();
})



export default app;