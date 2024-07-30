import {useEffect, useState}from 'react'
import { UserProfile } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import { UserInfo } from '@/schema/userInfo'
import useUpdateUserData from '@/config/updateUserData'

interface ProfileProps extends UserInfo {}

function Profile({ userId, userName, email, profilePicture }: ProfileProps) {

  //state
  // Stores the MongoDB profile data in state
  const [prevEmail, setPrevEmail] = useState<string>(email || "");
  const [prevUsername, setPrevUsername] = useState<string>(userName || "");
  const [prevProfilePicture, setPrevProfilePicture] = useState<string>(profilePicture|| "");

  //clerk
  const { user } = useUser();
  
  //config
  const { updateUserData } = useUpdateUserData()


  useEffect(() => {
    checkUpdatedUserInfo()
  }, [user, prevEmail, prevUsername, prevProfilePicture]);

  function checkUpdatedUserInfo(){
    /*
    If the Clerk's username, email, or profile picture doesn't match with the one in the MongoDB database, 
    it will trigger the newProfileData() function. This function updates the MongoDB profile data with 
    the new Clerk profile data.
    */
    if (user) {
      const clerkEmail = user.emailAddresses[0]?.emailAddress || "";
      const clerkUsername = user.username || "";
      const clerkProfilePicture = user.imageUrl || "";

      if (clerkUsername !== prevUsername || clerkEmail !== prevEmail || clerkProfilePicture !== prevProfilePicture) {
        // Update the references with the new Clerk profile data
        setPrevEmail(clerkEmail || "");
        setPrevUsername(clerkUsername || "");
        setPrevProfilePicture(clerkProfilePicture || "");
        newProfileData(clerkEmail, clerkUsername, clerkProfilePicture);
      }
    }
  }


  async function newProfileData(email: string, userName: string, profilePicture: string) {
    const data = {
      email,
      userName,
      profilePicture
    };
    updateUserData(data);
  }

  return (
    <div className='flex justify-center items-center'>
    <UserProfile/>
  </div>
  )
}

export default Profile