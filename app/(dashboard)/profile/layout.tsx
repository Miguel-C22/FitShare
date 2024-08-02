import React, { Children } from 'react';
import UserName from "@/components/profilePage/UserName"
import ProfileImage from "@/components/profilePage/ProfileImage"
import saveNewUser from "@/utils/saveNewUser"
import { fetchClerkUser } from "@/utils/fetchClerkUser";
import { serverSideFetchUserData } from "@/utils/serverSideFetchUserData"
import PersonalRecords from '@/components/profilePage/PersonalRecords';
import Bio from '@/components/profilePage/Bio';
import { PropsWithChildren } from 'react';

async function layout({ children }: PropsWithChildren){

  await saveNewUser()
  
  const userName = await fetchClerkUser();
  const userData = await serverSideFetchUserData()

  return (
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <UserName 
          userName={userName.userName} 
          userId={userName.userId} 
        />
        <ProfileImage 
          profilePicture={userName.userProfilePicture} 
          userId={userName.userId}
        /> 
        <div className='flex flex-wrap px-8 gap-8 justify-center items-center font-bold text-lg'>
          <button> <span className='bg-gray-900 text-white px-2 py-1 rounded-md'>200</span> <br></br> Following </button>
          <button> <span className='bg-gray-900 text-white px-2 py-1 rounded-md'>100</span> <br></br> Followers </button>
        </div>
      </div>
     
      <div className="flex items-center justify-center flex-col gap-8">
        <PersonalRecords 
          userId={userData.userId} 
          prBench={userData.prBench} 
          prDeadLift={userData.prDeadLift} 
          prSquat={userData.prSquat}
        />
        <Bio 
          userId={userData.userId} 
          bio={userData.bio}
        /> 
      </div>
      {children}
    </div>
  )
}

export default layout