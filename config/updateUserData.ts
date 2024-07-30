import { UserInfo } from '@/schema/userInfo';
import { useUser } from '@clerk/clerk-react';

function useUpdateUserData() {
    const { user } = useUser();

    async function updateUserData(data: Partial<UserInfo>) {

        if (!user) return null;

        try {
            const response = await fetch(`http://localhost:3000/api/accountSettings/${user.id}`, {
              method: "PATCH",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            if(!response) {
              console.log("Failed")
            }
            console.log("Success")
          } catch (error) {
            
          }
    }

    return { updateUserData };
}

export default useUpdateUserData