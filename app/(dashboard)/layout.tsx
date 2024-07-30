import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { UserButton} from '@clerk/nextjs'
import {currentUser} from "@clerk/nextjs/server";

async function layout({ children }: PropsWithChildren) {

  return (
    <div>
       <div className='max-w-screen-lg m-auto'>
        <div className="navbar bg-base-100 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/liveFeed">Feed</Link></li>
                    <li><Link href="/apiTrainer">Trainer</Link></li>
                    <li><Link href="/exercises">Exercises</Link></li>
                    <li><Link href="/explore">Explore</Link></li>
                    <li><Link href="/accountSettings">Settings</Link></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">FitShare</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/liveFeed">Feed</Link></li>
                    <li><Link href="/apiTrainer">Trainer</Link></li>
                    <li><Link href="/exercises">Exercises</Link></li>
                    <li><Link href="/explore">Explore</Link></li>
                    <li><Link href="/accountSettings">Settings</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <UserButton appearance={{
                    elements:{
                        avatarBox:"h-[48px] w-[48px]"
                    }}}
                afterSignOutUrl='/' />
            </div>
        </div>
        {children}
    </div>
    </div>
  )
}

export default layout