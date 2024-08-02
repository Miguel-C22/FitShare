"use client"
import Public  from '@/components/profilePage/Public';
import Private from '@/components/profilePage/Private';
import Saved from '@/components/profilePage/Saved';
import CreateWorkout from '@/components/CreateWorkout/CreateWorkout';
import fetchUsersPosts from '@/hooks/fetchUsersPosts';
import {useState, useEffect} from 'react'


function Profile(){
  const [selectedComponent, setSelectedComponent] = useState<string>('public');

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
  }, []);

  async function getUsersWorkoutPosts(){
    
  }

  const handleWorkoutSubmission = async () => {
      setLoading(true);
      setLoading(false);
  };

  function handleComponentSelection(component: string) {
      setSelectedComponent(component);
      
  }

  function renderComponent() {
      switch (selectedComponent) {
          case 'public':
              return <Public /> //publicData={publicData} loading={loading}
          case 'private':
              return  <Private />
          case 'saved':
              return <Saved />
          default:
              return <p>Error</p>;
      }
  }
  
  return (
      <div>
          <CreateWorkout/> {/*onWorkoutSubmit={handleWorkoutSubmission} */}
          <div className="flex justify-center gap-4 mt-24">
              <button 
              onClick={() => handleComponentSelection('public')}>
              Public
              </button>
              <span>|</span>
              <button 
              onClick={() => handleComponentSelection('private')}>
              Private
              </button>
              <span>|</span>
              <button 
              onClick={() => handleComponentSelection('saved')}>
              Saved
              </button>
          </div>
          {/* Render the selected component */}
          {renderComponent()}
      </div>
  )
}

export default Profile



