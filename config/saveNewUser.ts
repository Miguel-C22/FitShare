import {currentUser} from "@clerk/nextjs/server";   
import getAllUsers from "./getAllUsers";
import postUserData from "./postUserData";
import {UserInfo} from "../schema/userInfo"

async function saveNewUser(){
    const user = await currentUser()

    const allUsers: UserInfo[] = await getAllUsers();

    if (user === null) {
        console.error("User ID not found");
        return;
    }

    if (user.username === null) {
        console.error("User name not found");
        return;
    }

    const data: UserInfo = {  
        email: user.emailAddresses[0]?.emailAddress,
        userId: user.id ,
        userName: user.username,
        profilePicture: user.imageUrl
    }

    const filteredUsers = allUsers.filter(u => u.userId === user.id);

    if(filteredUsers.length == 0){
       try {
        await postUserData(data)
       } catch (error) {
        console.log(error)
       }
    }
}

export default saveNewUser


    