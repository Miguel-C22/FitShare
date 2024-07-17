import { Exercise } from '@/schema/exerciseApiData'
import React from 'react'

type exerciseData = {
    exerciseData: Exercise[]
}

function DisplayExercises({exerciseData}: exerciseData) {
  return (
    <div className='flex flex-wrap gap-24 justify-center items-center p-8 text-center mt-8'>
      {exerciseData.map(data => (
        <div 
          className='flex flex-col gap-4 bg-white rounded-lg shadow-2xl px-4 py-4 sm:px-8 md:px-12 lg:px-16 items-center sm:w-80 md:w-96'
          key={data.id}
        >
          <p className='text-2xl font-bold'>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
          <p><span className='font-semibold'>Targets</span><br />{data.bodyPart}</p>
          <p><span className='font-semibold'>Equipment Needed</span><br />{data.equipment}</p>
          <img src={data.gifUrl} alt="" />
          <div tabIndex={0} className="collapse collapse-plus rounded-lg shadow-2xl text-left bg-stone-900 text-white">
            <div className="collapse-title text-xl font-medium">
              Instructions
            </div>
            <div className="collapse-content"> 
              {data.instructions.map((data, index) => (
                <p key={index + 1}><span className='font-semibold'>Step {index + 1}:</span><br />{data}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayExercises