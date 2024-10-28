import React, { useState } from 'react';
import music from './data';
import { useOutletContext } from 'react-router-dom';


function Search() {
//  here we get onclick song play on other div
  const { setCurrentSong } = useOutletContext();   
  const playSong = (song) => {
    setCurrentSong(song);
  };

  const [query, setQuery] = useState('');
  const [filteredSongs, setFilteredSongs] = useState(music);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    
    // Filter music based on the search query
    const filtered = music.filter(song => 
      song.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  return (
    <div className='font-mono'>
      <div className='flex flex-row justify-between px-4'>
        <h1 className='text-2xl font-bold'>Search</h1>
        <input
          type="text"
          placeholder="Search for a song..."
          value={query}
          onChange={handleSearch}
          className="border p-2 rounded-xl"
        />
      </div>
      
      <div>

      <div className='flex flex-col gap-4 mt-5 mx-4'>
        {filteredSongs.map(song => (
          <h1 key={song.id} onClick={() => playSong(song)}>
            <div className='flex flex-row justify-between bg-gray-900 px-4 py-2  rounded-xl items-center'>
              <img className='w-8 h-8' src={song.imgS}></img>
              <h2 className='text-sm'>{song.title}</h2>
              <h2 className='text-sm'>{song.artist}</h2>
              <h2 className='text-sm'>{song.album}</h2>
            </div>
          </h1>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Search;