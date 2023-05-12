import User from "./user.model";

export const createUserToDb = async () => {
    const user = await new User({
        id: '666',
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
    return user;

};