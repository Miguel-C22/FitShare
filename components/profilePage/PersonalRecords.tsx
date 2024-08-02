import React from 'react'
import { UserInfo } from '@/schema/userInfo'
import { LiaDumbbellSolid } from "react-icons/lia";

interface PersonalRecordsProps extends UserInfo {}

function PersonalRecords({userId, prBench, prDeadLift, prSquat}: PersonalRecordsProps) {
  return (
    <div className='flex flex-wrap justify-center md:flex-row gap-8'>  
      <div className='flex items-center gap-4 shadow-xl p-8 rounded-xl'>
        <div className='bg-gray-800 p-2 rounded-full'>
          <LiaDumbbellSolid size={40} style={{ color: 'white' }}/>
        </div>
        <div>
          <h6 className="stat-title text-sm" >Bench</h6>
          <h2 className="stat-value text-2xl">{prBench} lbs</h2>
          <h6 className="stat-desc">Personal Record</h6>
        </div>
      </div>
      <div className='flex items-center gap-4 shadow-xl p-8 rounded-xl'>
        <div className='bg-gray-800 p-2 rounded-full'>
          <LiaDumbbellSolid size={40} style={{ color: 'white' }}/>
        </div>
        <div>
          <h6 className="stat-title text-sm" >Squat</h6>
          <h2 className="stat-value text-2xl">{prSquat} lbs</h2>
          <h6 className="stat-desc">Personal Record</h6>
        </div>
      </div>
      <div className='flex items-center gap-4 shadow-xl p-8 rounded-xl'>
        <div className='bg-gray-800 p-2 rounded-full'>
          <LiaDumbbellSolid size={40} style={{ color: 'white' }}/>
        </div>
        <div>
          <h6 className="stat-title text-sm" >DeadLift</h6>
          <h2 className="stat-value text-2xl">{prDeadLift} lbs</h2>
          <h6 className="stat-desc">Personal Record</h6>
        </div>
      </div>
  </div>
  )
}

export default PersonalRecords