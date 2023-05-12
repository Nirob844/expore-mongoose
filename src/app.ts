import express, { Application } from 'express';
import cors from 'cors'
import userRoutes from './app/modules/user/user.route';
const app: Application = express();

//using cors
app.use(cors());

//perse cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRoutes);


export default app;