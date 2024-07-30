import { useState } from 'react'
import { UserInfo } from '@/schema/userInfo'
import useUpdateUserData from '@/config/updateUserData';

interface BioProp extends UserInfo {}

function Bio({ userId, bio }: BioProp) {
  //state
  const [newBio, setNewBio] = useState<string>(bio || '')

  //config
  const {updateUserData} = useUpdateUserData()

  function clearBio () {
    setNewBio("")
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const usersBio = { bio: newBio };
    await updateUserData(usersBio);
  }

  return (
    <div className='flex flex-col gap-4 bg-white p-8 shadow-2xl rounded-xl'>
    <h3 className='text-2xl font-bold'>BIO</h3>
    <form method="dialog" className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <textarea 
        className="textarea textarea-bordered w-full h-48 bg-white outline outline-1"
        placeholder="Bio"
        value={newBio ?? bio}
        onChange={(e) => setNewBio(e.target.value)}
        maxLength={250}
      ></textarea>
      <div className='flex gap-2 flex-wrap'>
        <button className="btn btn-success w-36">Save</button>
        <button type='button' onClick={clearBio} className="btn btn-error w-36">Clear</button>
      </div>
    </form>
</div>

  )
}

export default Bio