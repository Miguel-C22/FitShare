import { currentUser } from "@clerk/nextjs/server";

async function fetchUsersPosts(){
    const user = await currentUser();
        if (!user) {
            console.error('User not found');
            return;
          }

        try {
            const response = await fetch(`http://localhost:3000/api/createWorkout/${user.id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
                  
            const publicPosts = data.allWorkouts.filter((post: any) => post.postType === 'public');
            const privatePosts = data.allWorkouts.filter((post: any) => post.postType === 'private');
            
            return { privatePosts, publicPosts }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
}

export default fetchUsersPosts