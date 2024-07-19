import connectMongoDB from "@/db/connectDB";
import UserData from "@/db/schema/userData";
import { NextResponse } from "next/server";

export async function GET(request: any){
    try {
        await connectMongoDB()
        const allUsers = await UserData.find({})

        if (!allUsers) {
            return NextResponse.json({ message: "Users not found" }, { status: 404 });
          }

        return NextResponse.json({ message: "All Users", data: allUsers }, {status: 201})
    } catch (error: any) {
        return NextResponse.json({ message: "Failed to get all users", error: error.message }, {status: 500})
    }
    
}