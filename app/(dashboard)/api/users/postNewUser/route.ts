import connectMongoDB from "@/db/connectDB";
import UserData from "@/db/schema/userData";
import { UserInfo } from "@/schema/userInfo";
import { NextResponse } from "next/server";

export async function POST(request: any){
    try {
        const { 
            userId, 
            email, 
            userName,
            profilePicture = "",  
            prBench = 0,
            prDeadLift = 0,
            prSquat = 0,
            bio = ""
        }: UserInfo = await request.json()

        await connectMongoDB()
        
        await UserData.create({ 
            userId, 
            email, 
            userName,
            profilePicture,  
            prBench,
            prDeadLift,
            prSquat,
            bio
        })
        return NextResponse.json({message: "User Data stored successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Failed to store Users Data" + error}, {status: 500})
    }
}


