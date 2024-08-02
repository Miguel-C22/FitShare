import { UserInfo } from "@/schema/userInfo";

async function getAllUsers(){

    let allUsers: UserInfo[] = [];
    
    try {
        const response = await fetch("http://localhost:3000/api/users/getAllUsers", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        allUsers = data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    return allUsers; 
}

export default getAllUsers