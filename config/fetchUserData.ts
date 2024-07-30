import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react';
import { UserInfo } from '@/schema/userInfo';

function useFetchUserData() {
    const [userData, setUserData] = useState<UserInfo | null>(null);
    const { user } = useUser();

    async function fetchUserData(id: string) {
        const response = await fetch(`http://localhost:3000/api/accountSettings/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setUserData(data.data[0]);
    }

    useEffect(() => {
        callFetchUserData()
    }, [user]);

    async function callFetchUserData(){
        if (user) {
            await fetchUserData(user.id);
        }
    } 

   
    return { userData, fetchUserData };
}

export default useFetchUserData;