import { useState, useEffect } from "react"
import { Workout } from "@/schema/CreateWorkout"
import { useUser } from '@clerk/clerk-react';

function fetchUsersPosts(){
    const { user } = useUser();

    const [publicPostsData, setPublicPostsData] = useState<Workout[]>([])
    const [privatePostsData, setPrivatePostsData] = useState<Workout[]>([])

    useEffect(() => {
        if(user){
            fetchPosts(user.id);
        }
    },[user])

    async function fetchPosts(userId: string){
        try {
            const response = await fetch(`http://localhost:3000/api/createWorkout/${userId}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
                  
            const publicPosts = data.allWorkouts.filter((post: Workout) => post.postType === 'public');
            const privatePosts = data.allWorkouts.filter((post: Workout) => post.postType === 'private');
      
            setPublicPostsData(publicPosts);
            setPrivatePostsData(privatePosts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return {  fetchPosts, publicPostsData, privatePostsData }
}

export default fetchUsersPosts