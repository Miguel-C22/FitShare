import {useState}from 'react'
import { UserInfo } from '@/schema/userInfo'
import updateUsersData from '@/hooks/updateUserData';

interface PersonalRecordsProps extends UserInfo {}

function PersonalRecords({ userId, prBench, prDeadLift, prSquat }: PersonalRecordsProps) {
  //config
  const { updateUserData } = updateUsersData()

  //state
  const [bench, setBench] = useState<number | undefined>(prBench);
  const [squat, setSquat] = useState<number | undefined>(prSquat);
  const [deadLift, setDeadLift] = useState<number | undefined>(prDeadLift);

  function clearPrs () {
    setBench(0)
    setSquat(0)
    setDeadLift(0)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    
    event.preventDefault();
    
    const updatePrs = {
      prBench: bench,
      prSquat: squat,
      prDeadLift: deadLift,
    }
    updateUserData(updatePrs)
  }

  return (
  <div className='flex flex-col items-center 
  justify-center text-center gap-4
  bg-white shadow-2xl w-full p-8 rounded-lg mb-8'>
    <p className='text-2xl font-bold'>Personal Records</p>
    <form method="dialog" className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Bench Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs"
          className="input input-bordered w-full max-w-xs  bg-white" 
          value={bench === undefined || 0 ? '' : bench}
          onChange={(e) => setBench(e.target.value === '' ? undefined : Number(e.target.value))}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Squat Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs"  
          className="input input-bordered w-full max-w-xs  bg-white" 
          value={squat === undefined || 0 ? '' : squat}
          onChange={(e) => setSquat(e.target.value === '' ? undefined : Number(e.target.value))}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Deadlift Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs" 
          className="input input-bordered w-full max-w-xs bg-white" 
          value={deadLift === undefined || 0 ? '' : deadLift}
          onChange={(e) => setDeadLift(e.target.value === '' ? undefined : Number(e.target.value))}

        />
      </label>
      <div className='flex gap-2 justify-start'>
        <button className="btn btn-success">save</button>
        <button type='button' onClick={clearPrs} className="btn btn-error">Clear</button>
      </div>
    </form>
  </div>
  )
}

export default PersonalRecords