import React, { useEffect } from 'react'
import useLoader from '@/hooks/loader';

function Public() {
      //Call function to fetch data to display all Posts posts
      // const {  fetchPosts, publicData } = useFetchUsersPosts()
      const {loading, setLoading, Loader} = useLoader()
      
  //     useEffect(() => {
  //      if (publicData.length < 0) {
  //          fetchPosts()
  //          setLoading(true);
  //      } else {
  //          setLoading(false);
  //      }
  //  }, [publicData]);
 
   return (
     <div className='my-12'>
       {/* {loading ? <div>{Loader()}</div> : 
         <div className='flex gap-8 flex-wrap justify-center mx-12'>
           {publicData.map(data => {
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
           })}
         </div>
       } */}
     </div>
   )
}

export default Public