import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true,
        },
        email:{
            type: String,
            required:true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar:{
            type: String, // cloudinary URL
            required: true,
        },
        coverImage:{
            type: String, //cloudinary URL
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type: String,
            required: [true, "password is required"]
        },
        refreshToken:{
            type: String,

        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);

























// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({},{timestamps: true});

// export const User = mongoose.model("User",userSchema);