
import './App.css';
import { Route, Routes } from 'react-router-dom'


import NoteState from './context/notes/NoteState';

import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling

import { useState } from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Firstpage from './components/Firstpage/Firstpage';
function App() {

  return (
    < >

      <NoteState>
      

   <Routes>
            <Route exact path='/' element={<Home  />} />
            <Route exact path='/noted' element={<Firstpage/>} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
          </Routes>
          <ToastContainer />
    

      </NoteState>

    </>
  );
}

export default App;
