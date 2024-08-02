import {useState, useEffect} from 'react'
import {exercises} from '../../data/exercises'
import { ExerciseOptions } from '../../schema/exerciseOptions'
import {getSpecificExercises} from '../../utils/exerciseApi'
import DisplayExercises from './DisplayExercises'
import useLoader from '../../hooks/loader'
import { Exercise } from '@/schema/exerciseApiData'
import useCapitalizeFirstLetter from '@/hooks/capitalizeFirstLetter'

function Selectors() {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('')
  const [specificExercises, setSpecificExercises] = useState<string[]>([])
  const [selectedExercise, setSelectedExercise] = useState<string>('')
  const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
  const { loading, setLoading, Loader } = useLoader()
  const { capitalizeFirstLetter } = useCapitalizeFirstLetter()

  useEffect(() => { 
    setLoaderBackToFalse()
  }, [exerciseData, setLoading]);

  function setLoaderBackToFalse(){
    if (exerciseData.length > 0) {
      setLoading(false);
    }
  }

  function handleBodyPartChange(e: React.ChangeEvent<HTMLSelectElement>){
    let bodyPart = e.target.value.charAt(0).toLowerCase() + e.target.value.slice(1) //!Important
    setSelectedBodyPart(bodyPart as keyof ExerciseOptions );
    setSpecificExercises(exercises[bodyPart as keyof ExerciseOptions ]);
    setSelectedExercise('')
  };

  async function fetchData(e: React.ChangeEvent<HTMLSelectElement>) {
    setLoading(true)
    const exerciseValue = e.target.value;
    const data = await getSpecificExercises(exerciseValue);
    setSelectedExercise(exerciseValue);
    setExerciseData(data);
  }
  
    return (
      <div>
        <div className='flex flex-col justify-start items-center mb-12'>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold">Body Part</span>
            </div>
            <select 
              className="select select-bordered bg-stone-900 text-white text-xl"
              value={selectedBodyPart}
              onChange={handleBodyPartChange}
              key="body-part-select"
            >
              <option value="" disabled>Select Body Part</option>
              {Object.keys(exercises).map((bodyPart, index) => (
                <option key={`body-part-${index}`}>{capitalizeFirstLetter(bodyPart)}</option>
              ))}
            </select>
          </label>
      
          {specificExercises && selectedBodyPart ? 
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-bold">Exercise</span>
              </div>
              <select 
                className="select select-bordered  bg-stone-900 text-white text-xl"
                key="exercise-select"
                value={selectedExercise || ''}
                onChange={fetchData}
              >
                <option value="" disabled>Select Exercise</option>
                {specificExercises.map((exercise, index) => (
                  <option key={`exercise-${index}`}>{exercise}</option>
                ))}
              </select>
            </label>
            : ""}

            {loading ?  <div className='mt-24'>{Loader()}</div>: ""}
            {exerciseData ? <DisplayExercises exerciseData={exerciseData} />: ""}
        </div>
      </div>
    );
}

export default Selectors