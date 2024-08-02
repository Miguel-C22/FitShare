import React from 'react'
import { UserInfo } from '@/schema/userInfo'

interface BioProp extends UserInfo{}

function Bio({bio}: BioProp) {
  return (
    <div className="px-12 lg:px-56 md:px-56 text-center">
        <p>{bio}</p>
    </div>
  )
}

export default Bio