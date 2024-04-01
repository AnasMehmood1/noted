
import './App.css';
import { Route, Routes } from 'react-router-dom'

import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';


import { useState } from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
function App() {
  const [alert ,setAlert] = useState(null);
  const showAlert = ( message , type)=>{
   setAlert(
     {
       msg : message,
     typ : type
     }
   )
   setTimeout(() => {
     setAlert(null)
   }, 1500);
  }
  return (
    < >

      <NoteState>
      <Alert alert={alert}/>

   <Routes>
            <Route exact path='/' element={<Home  showAlert={showAlert}/>} />
            <Route exact path='/login' element={<Login showAlert={showAlert}/>} />
            <Route exact path='/signup' element={<Signup showAlert={showAlert}/>} />
          </Routes>

    

      </NoteState>

    </>
  );
}

export default App;
