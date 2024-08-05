import React from 'react'
import { UserInfo } from '@/schema/userInfo'

interface ProfileImageProps extends UserInfo {}

function ProfileImage({profilePicture, userId}: ProfileImageProps) {
  return (
    <div >
      <img className="h-44 w-44 rounded-full object-cover" src={profilePicture} alt="" />
    </div>
  )
}

export default ProfileImage