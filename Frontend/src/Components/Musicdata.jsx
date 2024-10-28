import React from 'react';
import { useOutletContext } from 'react-router-dom';
import music from './data';

function Musicdata() {
  const { setCurrentSong } = useOutletContext();
  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className='font-mono'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <div className='sm:grid sm:grid-cols-4 flex flex-col justify-center items-center gap-6 py-4 '>
        {music.map((song, index) => (
          <h1 key={index} onClick={() => playSong(song)}>
            <div className='flex flex-col mt-3 bg-gray-900 p-2 rounded-xl'>
            <img className='w-15 h-28 rounded-xl' src={song.imgS}></img>
              <h1 className='text-base'>{song.title}</h1>
              <h1 className='text-xs'>{song.album}</h1>
              <h1 className='text-xs'>{song.artist}</h1>
            </div>

          </h1>
        ))}
      </div>
    </div>
  );
}

export default Musicdata;