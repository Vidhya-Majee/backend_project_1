// //require('dotenv').config({path:'./env'})
// import dotenv from "dotenv"

// // import mongoose from "mongoose";
// // import {DB_NAME} from "./constants";
// import connectDB from "./db/index.js";

// dotenv.config({path:'./env'})

// connectDB()

//**************************************************************************************/


/*
import express from "express"
const app=express()

(async()=>{
    try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("ERROR:",error);
        throw err
   })

   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
    
   })

}catch(error){
console.log("ERROR:",error);
throw err
    }
})()  */
//*************************************************************************************************************** */
import express from 'express';
import connectDB from "./db/index.js";

import dotenv from "dotenv"
const app = express();

dotenv.config({path:'./env'})
connectDB()
.then(()=>{
    app.listen(5000, () => {
    console.log('Server running on port 5000');
    })
})
.catch((err)=>{
    console.log("mongodb connection failed!!!",err);
    
});



// app.listen(5000, () => {
//     console.log('Server running on port 5000');
// });
