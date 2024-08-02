import { currentUser } from "@clerk/nextjs/server";

export async function fetchClerkUser() {
  const user = await currentUser();
  if (!user || !user.username) {
    throw new Error("Couldn't get user's username!");
  }
  const userId = user.id
  const userName = user.username
  const userProfilePicture = user.imageUrl
  return {userId, userName, userProfilePicture};
}