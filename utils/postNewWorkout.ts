import { Exercise } from '@/schema/CreateWorkout';

type PostData = {
    userId: string, 
    email: string, 
    exercises: Exercise[],
    description: string,
    postType: string
      
}

export async function postNewWorkout(data: PostData){
    try {
        const response = await fetch("http://localhost:3000/api/workout/postWorkout", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          return response
    } catch (error) {
        
    }
}

