import { currentUser } from "@clerk/nextjs/server";

export async function serverSideFetchUserData() {
    const user = await currentUser();
    if (!user || !user.username) {
        throw new Error("Couldn't get user's username!");
      }
        const response = await fetch(`http://localhost:3000/api/accountSettings/${user.id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        const userData = data.data[0]
      
   
    return userData 
}