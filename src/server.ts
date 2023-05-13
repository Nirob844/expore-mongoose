import mongoose from 'mongoose';
import app from './app';

const port: number = 5000;

// database connection

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`database connection successful`);

        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);

    }

}

bootstrap()



