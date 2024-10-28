import React, { useState, useEffect } from 'react';
// import { IconName } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";

function Player({ song, nextSong, previousSong }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = React.useRef(new Audio());

  const playSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  useEffect(() => {
    if (song) {
      audioRef.current.src = song.src; // Set the audio source to the current song
      audioRef.current.play();      // Automatically play the song when it changes
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      audioRef.current.pause(); // Pause audio on unmount
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [song]); // Re-run when the song changes

  return (
    <div className='font-mono'>
      <h1 className='text-2xl font-bold hidden sm:block'>Music Player</h1>
      
      <div className='sm:mt-10 mt-1'>
          
          <div className='flex sm:flex-col flex-row gap-5'>
              <h1 className='flex justify-center items-center'>
                {song ? (
                  <img className='sm:w-60 sm:h-60 w-10 h-10' src={song.imgS}></img>
                ) : (
                  <img className='sm:w-60 sm:h-60 w-10 h-10' src='logo.gif'></img>
                )}
              </h1>

              <h1>
                {song ? (
                  <p>{song.title}</p>
                ) : (
                  <p>No song selected</p>
                )}
              </h1>
          </div>

          <div className='mt-2'>
            <div className='flex flex-row justify-between'>
              <h1 className='sm:text-sm text-xs'>{Math.floor(currentTime)}</h1>
              <h1 className='sm:text-sm text-xs'>{Math.floor(duration)} s</h1>
            </div>
            <input
              className='w-full'
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSliderChange}
            />
          </div>

          <div className='flex flex-row justify-between px-5 py-1'>
            <button onClick={previousSong} disabled={!song}>
            <FaStepBackward />
            </button>
            <button onClick={playSong} disabled={!song}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={nextSong} disabled={!song}>
            <FaStepForward />
            </button>
          </div>
      </div>
    </div>
  );
}

export default Player;