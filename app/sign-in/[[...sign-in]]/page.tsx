import React from 'react'
import { SignIn } from "@clerk/nextjs"

function SignInPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <SignIn/>
    </div>
  )
}

export default SignInPage