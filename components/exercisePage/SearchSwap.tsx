"use client"

import React from 'react'
import SearchExercise from './SearchExercise'
import Selectors from './Selectors'
import useToggle from "../../hooks/exerciseSearchToggle"

function SearchSwap() {
    const {toggle, toggleOnOff } = useToggle()

    return (
      <div className='flex flex-col justify-center items-center p-8'>
        <div role="alert" className="alert flex justify-center flex-col sm:flex-row sm:justify-between bg-white shadow-2xl mb-12">
            {toggle ? 
                <div className='flex items-center gap-4 flex-col sm:flex-row'>
                    <p className='font-bold text-xl'>Select a Exercise by our list </p>  

                    <svg className="w-6 h-6 text-gray-800 dark:text-black hidden sm:block" 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>

                    <svg className="w-6 h-6 text-gray-800 dark:text-black block sm:hidden" aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg>
                </div>
                : 
                <div className='flex items-center gap-4 flex-col sm:flex-row'>
                    <p className='font-bold text-xl'>Search for a specific exercise </p>  
                    <svg className="w-6 h-6 text-gray-800 dark:text-black hidden sm:block" 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>

                    <svg className="w-6 h-6 text-gray-800 dark:text-black block sm:hidden" aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg>
                </div>
            }
        <div>
            <button className='btn bg-stone-900 text-white shadow-2xl max-w-xs w-full' onClick={() => toggleOnOff()}> {toggle ? "Select" : "Search"}</button>
        </div>
        </div>
        {toggle ? <SearchExercise /> : <Selectors />}
      </div> 
    )
}

export default SearchSwap