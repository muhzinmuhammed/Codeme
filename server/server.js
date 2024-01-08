import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import "dotenv/config";
import connectToDb from './config/connection.js';
import userRouter from "./router/userRouter.js";
import  adminRouer  from './router/adminRouter.js';
import path from 'path'

const app=express()
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, "../client/dist"))); 
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/dist/index.html'))
})

/*user route*/
app.use("/user", userRouter);
/*user route*/

/*admin route*/
app.use('/admin',adminRouer)

connectToDb();

app.listen(PORT)
