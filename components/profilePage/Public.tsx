import React, { useEffect, useState } from 'react'
import useLoader from '@/hooks/loader';
import {Workout} from '@/schema/createWorkout'
import useFetchUsersPosts from '@/hooks/fetchUsersPosts';

type PublicPostsDataProps = {
  publicPostsData: Workout[]
}
// { publicPostsData }: PublicPostsDataProps
function Public({ publicPostsData}: PublicPostsDataProps) {
  const { loading, setLoading, Loader } = useLoader();
 
   return (
     <div className='my-12'>
       {loading ? <div>{Loader()}</div> : 
         <div className='flex gap-8 flex-wrap justify-center mx-12'>
          {publicPostsData.length === 0 ? <p>You have No Posts</p> : <>{publicPostsData.map(data => {
             return (
               <React.Fragment key={data._id}>
                 <div className='w-full md:w-96 flex-shrink-0 border-solid border-2 p-4 border-stone-300 rounded-lg'>
                   <div className="overflow-x-auto">
                     <table className="table min-w-full md:min-w-0">
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
                   <p className='pl-4 pt-4 mt-4 border-t-2 border-stone-300'>
                     {data.description}
                   </p>
                 </div>
               </React.Fragment>
             )
           })}</> }
          
         </div>
       }
     </div>
   )
}

export default Public