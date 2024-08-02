import React from "react";
import { UserInfo } from '@/schema/userInfo'
import useCapitalizeFirstLetter from '@/hooks/capitalizeFirstLetter'

interface UserNameProps extends UserInfo {}

function UserName({userName, userId}: UserNameProps) {
    const { capitalizeFirstLetter } = useCapitalizeFirstLetter()

  return (
    <div>
        <span className="text-3xl">{capitalizeFirstLetter(userName || "")}</span> 
    </div>
  )
}

export default UserName