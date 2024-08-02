'use client'
import { useState} from "react";
import { TiUser } from "react-icons/ti";
import { BsGraphUp } from "react-icons/bs";
import { TiBusinessCard } from "react-icons/ti";
import { PiSignOutBold } from "react-icons/pi";
import { useClerk, useUser } from '@clerk/nextjs';
import useFetchUserData from "@/hooks/fetchUserData";
import Profile from "@/components/settingsPage/Profile";
import Bio from "@/components/settingsPage/Bio"
import PersonalRecords from "@/components/settingsPage/PersonalRecords";
import useLoader from "@/hooks/loader";

function accountSettingsPage() {
  //state
  const [selectedComponent, setSelectedComponent] = useState<string>("")

  //hooks
  const { Loader } = useLoader()

  //config
  const {userData, fetchUserData} = useFetchUserData()

  //clerk
  const {signOut} = useClerk()
  const {user} = useUser()

  function handleComponentSelection(component: string) {
    setSelectedComponent(component);
    if (user) {
        fetchUserData(user.id);
    }else{
      throw new Error("Current Users Id was not able to be fetched")
    }  
  }

  function renderComponent(){
    if (!userData) {
      return <div className='mt-24'>{Loader()}</div>;
    }

    switch (selectedComponent) {
      case "profile":
        return <Profile userId={userData.userId} userName={userData.userName} email={userData.email} profilePicture={userData?.profilePicture}/>
      case "bio":
        return <Bio userId={userData.userId} bio={userData.bio}/> 
      case "pr":
        return <PersonalRecords userId={userData.userId} prBench={userData.prBench} prDeadLift={userData.prDeadLift} prSquat={userData.prSquat}/>
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col px-8">
      <div className="flex flex-col gap-4 w-full">
        <button onClick={() => handleComponentSelection("profile")}>
          <div className="flex justify-between items-center">
            <h4 className=" text-xl font-bold text-gray-800">Profile</h4>
            <TiUser size={30}/>
          </div>
        </button>

        <hr className="w-full border-t-2 border-gray-300" />

        <button onClick={() => handleComponentSelection("pr")}>
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-bold text-gray-800">Personal Records</h4>
            <BsGraphUp size={25}/>
          </div>
        </button>

        <hr className="w-full border-t-2 border-gray-300" />

        <button onClick={() => handleComponentSelection("bio")}>
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-bold text-gray-800">Bio</h4>
            <TiBusinessCard size={30}/>
          </div>
        </button>
        
        <hr className="w-full border-t-2 border-gray-300" />
        
        <button onClick={() => signOut({ redirectUrl: '/' })}>
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-bold text-gray-800">Sign Out</h4>
            <PiSignOutBold size={30}/>
          </div>
        </button>
      </div>

      <div className="my-24">
        {renderComponent()}
      </div>
      

    </div> 
  )
}

export default accountSettingsPage