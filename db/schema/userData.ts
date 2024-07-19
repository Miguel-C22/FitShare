import mongoose, { Schema, Document } from "mongoose";
import { UserInfo } from "@/schema/userInfo";

const userData = new Schema<UserInfo>({
    userId: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
        unique: true,
    },
    userName: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },  
    prBench: {
        type: Number        
    },
    prDeadLift: {
        type: Number
    
    },
    prSquat: {
        type: Number
    },
    bio:{
        type: String
    }
})

const UserData = mongoose.models.UserData || mongoose.model<UserInfo>("UserData", userData)

export default UserData