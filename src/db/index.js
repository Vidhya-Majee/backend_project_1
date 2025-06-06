
// import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js";

// const connectDB=async () => {
//     try{
//    const connectionIntance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    console.log(`\n mongoDb connection error !! DB host:${connectionIntance.connection.host}`);
   
   
   
//     }catch(error){
//         console.log("mongodb connection error",error);
//      process.exit(1)
        
//     }
// }
// export default connectDB

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;
