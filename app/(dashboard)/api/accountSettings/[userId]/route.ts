import connectMongoDB from "../../../../../db/connectDB";
import UserData from "../../../../../db/schema/userData";
import { UserInfo } from "@/schema/userInfo";
import { NextResponse } from "next/server";

type Params = {
  userId: string;
};

export async function PATCH(request: Request, { params }: { params: Params }) {
  const userId = params.userId;
  const req = await request.json();

  try {
    const {
      email,
      userName,
      profilePicture,
      prBench,
      prDeadLift,
      prSquat,
      bio
    }: UserInfo = req;

    // Creating an object to store the fields that need updating
    const updates: Partial<UserInfo> = {};

    // Checking if each field is present in the request body and adding it to the updates object if it is
    if (email !== undefined) updates.email = email;
    if (userName !== undefined) updates.userName = userName;
    if (profilePicture !== undefined) updates.profilePicture = profilePicture;
    if (prBench !== undefined) updates.prBench = prBench;
    if (prDeadLift !== undefined) updates.prDeadLift = prDeadLift;
    if (prSquat !== undefined) updates.prSquat = prSquat;
    if (bio !== undefined) updates.bio = bio;

    await connectMongoDB();
    const updatedUserData = await UserData.findOneAndUpdate({ userId: userId }, updates, { new: true });

    if (!updatedUserData) {
      return NextResponse.json({ message: `Failed to update User Account Data for User ID:${userId}` }, { status: 404 });
    }
    return NextResponse.json({ message: `User Account Data Changed for User ID:${userId}` }, { status: 200 });
  } catch (error) {
    console.error('Error updating user data:', error);
    return NextResponse.json({ message: `Failed to update User Account Data for User ID:${userId}` }, { status: 500 });
  }
}


export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const userId = params.userId;

    await connectMongoDB();
    const individualUser = await UserData.find({ userId: userId });

    if (!individualUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User found", data: individualUser }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}