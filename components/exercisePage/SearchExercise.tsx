import {useState, useEffect} from 'react'
import {getSpecificExercises} from '../../config/exerciseApi'
import DisplayExercises from './DisplayExercises'
import useLoader from '../../hooks/loader'
import { Exercise } from "../../schema/exerciseApiData"

function SearchExercise() {
  const [exercise, setExercise] = useState<string>('')
  const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
  const [searchError, setSearchError] = useState<boolean>(false)
  const { loading, setLoading, Loader } = useLoader()

  useEffect(() => { 
    setLoaderBackToFalse()
  }, [exerciseData, setLoading]);

  function setLoaderBackToFalse(){
    if (exerciseData.length > 0) {
      setLoading(false);
    }
  }

  async function fetchData(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      setLoading(true)
      const data = await getSpecificExercises(exercise);
      setExerciseData(data);

      if(data.length == 0){
        setSearchError(true)
        setLoading(false)
      }
      else{
        setSearchError(false)
      }
    }

  return (
    <div className='flex flex-col items-center justify-center'>
    <div>
        <form 
        onSubmit={fetchData}
        className="flex flex-col flex-wrap justify-center"
        >
            <div className="label">
                <span className="label-text font-bold">Search for any exercise</span>
            </div>

            <input 
                type="text" 
                placeholder="Search Exercise"  
                onChange={(e) => setExercise(e.target.value)}
                className="input input-bordered w-full max-w-xs bg-stone-900 text-white text-xl" 
                required
            />
            <button className="btn bg-white shadow-2xl w-full max-w-xs mt-2" type="submit">Search</button>
        </form>
    </div>

    {loading ?  <div className='mt-24'>{Loader()}</div> : ""}
    {exerciseData ? <DisplayExercises exerciseData={exerciseData}/> : ""}
    {searchError ? 
    <h2 className='font-bold text-xl text-center'>Oops! We couldn't find any workouts for that search. Maybe try a 
    different term or browse through our recommended workouts in our selected list!</h2> 
    : "" }
    </div>
  );
}

export default SearchExercise