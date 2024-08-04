import { NextResponse } from "next/server"
import connectMongoDB from "../../../../../../../db/connectDB";
import RemoveWorkout from "@/db/schema/createWorkout";

type Params = {
    userId: string,
    workoutId: string

  };
  
export async function DELETE(request: Request, { params }: { params: Params }) {
    const {userId, workoutId} = params;
    try {
        await connectMongoDB();
        const result = await RemoveWorkout.deleteOne({ _id: workoutId, userId: userId });
        return NextResponse.json({ message: `Removed workout ${workoutId} From user ${userId}, ${result}`}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Delete workout" }, { status: 500 });
    }
}