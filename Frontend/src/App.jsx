import React from 'react'
import './App.css'
import Dashboard from './Components/Dashboard'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Search from './Components/Search';
import Musicdata from './Components/Musicdata';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} >
          <Route path='/' element={<Musicdata setCurrentSong={() => {}} />}></Route>
          <Route path='/search' element={<Search setCurrentSong={() => {}} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
