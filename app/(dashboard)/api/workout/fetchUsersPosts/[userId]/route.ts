import { NextResponse } from "next/server"
import connectMongoDB from "../../../../../../db/connectDB";
import NewWorkout from "@/db/schema/createWorkout";

type Params = {
    userId: string;
  };
  

export async function GET(request: Request, { params }: { params: Params }) {
    try {
      const userId = params.userId;
      await connectMongoDB();
      const allWorkouts =  await NewWorkout.find({ userId: userId })
        return NextResponse.json({ message: `All Workouts for ${userId}`, allWorkouts }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch all workouts" }, { status: 500 });
    }
}
