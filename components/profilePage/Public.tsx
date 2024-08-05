import React from 'react'
import useLoader from '@/hooks/loader';
import {Workout} from '@/schema/createWorkout'
import { FaRegTrashCan } from "react-icons/fa6";
type PublicPostsDataProps = {
  publicPostsData: Workout[],
  handleDelete: (workoutId: string) => void
}
function Public({ publicPostsData, handleDelete}: PublicPostsDataProps) {
  
   return (
     <div className='my-12'> 
         <div className='flex gap-8 flex-wrap justify-center mx-12'>
          {publicPostsData.length === 0 ? <p>You have No Posts</p> :
          <>
            {publicPostsData.map(data => {
             return (
               <React.Fragment key={data._id}>
                <div className='flex flex-col gap-2'>
                 <div className='w-full md:w-96 flex-shrink-0 border-solid border-2 p-4 border-neutral-content rounded-lg'>
                   <div className="overflow-x-auto">
                     <table className="table min-w-full md:min-w-0 text-base-content">
                       <thead>
                         <tr>
                           <th>Exercise</th>
                           <th>Sets</th>
                           <th>Reps</th>
                           <th>Weight</th>
                         </tr>
                       </thead>
                       <tbody>
                         {data.exercises.map(exercise => {
                           return (
                             <tr key={exercise._id}>
                               <td>{exercise.exercise}</td>
                               <td>{exercise.sets}</td>
                               <td>{exercise.reps}</td>
                               <td>{exercise.weight}</td>
                             </tr>
                           )
                         })}
                       </tbody>
                     </table>
                   </div>
                   <p className='pl-4 pt-4 mt-4 border-t-2 border-neutral-content'>
                     {data.description}
                   </p>
                 </div>
                 <button className='flex justify-end' onClick={() => handleDelete(data._id || "")}>
                    <FaRegTrashCan/>
                  </button>
                </div>
               </React.Fragment>
             )
           })}
          </>
          }
        </div>
     </div>
   )
}

export default Public