import React from "react"
import { useUser } from '@clerk/clerk-react';

function useDeleteUsersWorkoutPost(){
    const { user } = useUser();

    async function deleteWorkoutPost(workoutPostId: String){
        if (!user) return
        try {
            const response = await fetch(`http://localhost:3000/api/workout/deleteUsersPosts/${user.id}/${workoutPostId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
                  
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return { deleteWorkoutPost } 
}

export default useDeleteUsersWorkoutPost

