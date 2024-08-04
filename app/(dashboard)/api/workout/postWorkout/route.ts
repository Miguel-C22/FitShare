import { NextResponse } from "next/server"
import connectMongoDB from "../../../../../db/connectDB";
import NewWorkout from "@/db/schema/createWorkout";

export async function POST(request: Request){
    try {
        const { userId, email, exercises, description, postType } = await request.json();
        await connectMongoDB()
        await NewWorkout.create({ userId, email, exercises, description, postType });
        return NextResponse.json({ message: "Workout Created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create workout" }, { status: 500 });
    }
    
}