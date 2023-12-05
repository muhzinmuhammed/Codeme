import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import "dotenv/config";
import connectToDb from './config/connection.js';
import userRouter from "./router/userRouter.js";


const app=express()
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

/*student route*/
app.use("/user", userRouter);
/*instructor route*/

connectToDb();

app.listen(PORT)
