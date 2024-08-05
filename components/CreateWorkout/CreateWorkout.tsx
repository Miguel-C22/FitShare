import {useState, useEffect} from 'react'
import useAlert from '../../hooks/alert'
import useLoader from '../../hooks/loader'
import { useUser } from '@clerk/clerk-react';
import {Exercise} from '../../schema/createWorkout'
import { postNewWorkout } from '@/utils/postNewWorkout';

type OnWorkoutSubmitProp = {
    onWorkoutSubmit: () => void
}

function CreateWorkout({onWorkoutSubmit}: OnWorkoutSubmitProp) {
    //Clerk
    const { user } = useUser();

    //State
    const [exerciseRows, setExerciseRows] = useState<Exercise[]>([]);
    const [description, setDescription] = useState<string>("")
    const [postType, setPostType] = useState<string>("private")
  
    //Hooks
    const {showAlertSuccess, showAlertFail, AlertComponent} = useAlert()
    const {loading, setLoading, Loader} = useLoader()

    useEffect(() => {
        addExerciseRow()
      }, [])
    
    function addExerciseRow(){
      setExerciseRows([...exerciseRows, {
        exercise: '',
        sets: 0,
        reps: 0,
        weight: 0 
      }]);
    };

    function resetForm() {
        setExerciseRows([{
          exercise: '',
          sets: 0,
          reps: 0,
          weight: 0
        }]);
        setDescription('');
        setPostType('private')
      };
  
    function removeExerciseRow(indexToRemove: number) {
      setExerciseRows(exerciseRows.filter((_, index) => index !== indexToRemove));
    };
  
    async function postWorkout(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        if(!user){
            throw new Error ("Couldn't Grab users info")
        }
        const postData = {
            userId: user.id, 
            email: user.emailAddresses[0]?.emailAddress,
            exercises: exerciseRows,
            description: description,
            postType: postType
        }
        try {
        const response = await postNewWorkout(postData);
        if (response) {
            resetForm();
            showAlertSuccess()
            onWorkoutSubmit()
            setLoading(false);
            console.log("Workout Posted");
            }
        } catch (error) {
            showAlertFail()
            setLoading(false);
            console.log(error);
        }
    }
  
    function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>){
      if (e.target.checked) {
        setPostType("public");
      } else {
        setPostType("private");
      }
    };
  
    function openAddWorkoutModal (){
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            return  modal.showModal();
        }
    }

    function closeAddWorkoutModal(){
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.close();
        }
    }
  
    return (
      <div className='fixed bottom-5 right-5 z-10'>
      <button className="btn btn-neutral rounded-lg" onClick={openAddWorkoutModal}>Add Workout</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-screen-xl relative">
          <h3 className="font-bold text-lg mb-4">Workout Log</h3>
          {/*Check box on if the user wants their post to be Public or Private*/}
          <input type="checkbox" className="toggle" checked={postType === "public"} 
           onChange={handleCheckboxChange}/>
          <p>{postType}</p>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
          onClick={closeAddWorkoutModal}>✕</button>
          <div className="overflow-x-auto relative">
            <form onSubmit={postWorkout} method="dialog">
              {/*Workout table to log your workout*/}
              <table className="table mb-8">
                <thead>
                  <tr>
                    <th>EXERCISE</th>
                    <th>SETS</th>
                    <th>REPS</th>
                    <th>WEIGHT</th>
                  </tr>
                </thead>
                    <tbody>
                        {exerciseRows.map((exercise, index) => (
                        <tr key={index}>
                        <td>
                            <input
                            value={exercise.exercise} // Exercise
                            onChange={(e) => {
                                const updatedRows = [...exerciseRows];
                                updatedRows[index].exercise = e.target.value;
                                setExerciseRows(updatedRows);
                            }}
                            type="text"
                            placeholder="Exercise"
                            className="input input-bordered input-sm w-48 sm:w-64"
                            required
                            />
                        </td>
                        <td>
                            <input
                            value={exercise.sets || " "} // Sets
                            onChange={(e) => {
                                const updatedRows = [...exerciseRows];
                                updatedRows[index].sets = e.target.value ? Number(e.target.value) : 0;
                                setExerciseRows(updatedRows);
                            }}
                            type="number"
                            placeholder="Sets"
                            className="input input-bordered input-sm w-48 sm:w-42 rounded-lg"
                            required
                            />
                        </td>
                        <td>
                            <input
                            value={exercise.reps || " "}
                            onChange={(e) => {
                                const updatedRows = [...exerciseRows];
                                updatedRows[index].reps = e.target.value ? Number(e.target.value) : 0;
                                setExerciseRows(updatedRows);
                            }}
                            type="number"
                            placeholder="Reps" 
                            className="input input-bordered input-sm w-48 sm:w-42 rounded-lg"
                            required
                            />
                        </td>
                        <td>
                            <input
                            value={exercise.weight || " "}
                            onChange={(e) => {
                                const updatedRows = [...exerciseRows];
                                updatedRows[index].weight = e.target.value ? Number(e.target.value) : 0;
                                setExerciseRows(updatedRows);
                            }}
                            type="number"
                            placeholder="Weight"
                            className="input input-bordered input-sm w-48 sm:w-42 rounded-lg"
                            required
                            />
                        </td>
                        <td>
                        {exerciseRows.length > 1 && (
                            <button 
                            type="button"
                            className="btn btn-outline btn-error btn-sm rounded-lg" 
                            onClick={() => removeExerciseRow(index)}
                            >
                            remove
                            </button>
                        )}
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {/*Bio*/}
                <textarea 
                value={description}
                onChange={(e) => (setDescription(e.target.value))}
                className="textarea textarea-bordered w-full mb-24 rounded-lg" 
                placeholder="Description">
                </textarea>
                {/*post button and add another exercise button*/}
                <div className="modal-action mt-4 absolute bottom-0 left-4 sm:right-4">
                    <button type="submit" className='btn btn-success btn-md rounded-lg'>Post</button>
                    <button className="btn bg-stone-900 text-white btn-md rounded-lg" 
                    onClick={(e) => {
                        e.preventDefault();
                        addExerciseRow();
                    }}>+ Exercise</button>
                </div>
              </form>
            </div>
          </div>
            {loading ? <div className='absolute'>{Loader()}</div> : ""}
          <div className='absolute w-64 sm:w-96'>
            <AlertComponent />
          </div>
        </dialog>
      </div>
    );
  }

export default CreateWorkout