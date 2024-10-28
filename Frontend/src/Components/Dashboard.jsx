import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import { Outlet } from 'react-router-dom';
import music from './data'; 

function Dashboard() {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1); 

  const nextSong = () => {
    if (currentIndex < music.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentSong(music[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const previousSong = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentSong(music[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className='flex sm:flex-row flex-col-reverse gap-3'>
      <div className='sticky sm:left-0 bottom-0'>
        <Sidebar />
      </div>

      <div className='gap-3 basis-11/12 h-screen'>
        <div className='flex flex-row gap-4 items-center sm:py-4 py-1'>
          <img className='sm:hidden w-12 h-12' src='logo.gif' alt='Logo' />
          <h1 className='sm:text-2xl text-xl font-bold font-mono'>RockBox Music Player</h1>
        </div>

        <div className='flex sm:flex-row flex-col gap-3'>
          <div className='basis-8/12 bg-gray-950 p-3 rounded-2xl sm:mx-0 mx-2'>
            <Outlet context={{ setCurrentSong, setCurrentIndex }} />
          </div>

          <div className='basis-4/12 bg-gray-950 p-3 rounded-2xl sm:mr-2 mx-2 '>
            <Player 
              song={currentSong} 
              nextSong={nextSong} 
              previousSong={previousSong} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;