// require("dotenv").config({path:"./env"});

import connectDB from "./database/connect.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

connectDB();





























/*
import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        app.on("error",(error) => {
            console.log("errr",error);
            throw error;
        });

        app.listen(process.env.PORT,()=>{
            console.log(`Application is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error( "ERROR :",error );
        throw error;
    };

} )();
 */