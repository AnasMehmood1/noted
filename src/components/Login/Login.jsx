import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; //
const Login = (props) => {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const name = localStorage.getItem('name') || 'User';

  let navigate = useNavigate();
  const [password, setPassword] = useState("")

  // Login Component
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    // Save the auth token and redirect
    try {
      if (json.success) {

        localStorage.setItem('token', json.authtoken);
        localStorage.setItem('name', json.name);

        toast.success("Login Successfully"); // Display success toast
        navigate('/');

      }
      else {
        toast.error("Please enter valid credential"); // Display success toast
      }
    } catch (error) {
      console.error('Error storing token in localStorage:', error);
    }



  }


  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="login-main-container">
        <div className="login-left-side"style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(./login.png)',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundPositionY:"40px",
            height: '85vh'
          }} >
        
          <div className="text">
           <p><i class="fa-solid fa-quote-left"></i> This is absolute way to make your notes easier and save the earth as well.  Anything will be better <i class="fa-solid fa-quote-right"></i></p>
            </div>
            
            <div className="author-container">
            <div className="author">
             <p className="name">Anas Mehmood</p>
             <p className="list">MERN Stack Developer</p>
             </div>
             <div className="circle-arrow">
          <i className="fa-solid fa-angle-left"></i>
          <i className="fa-solid fa-angle-right"></i>
        </div>
            </div>
          
        </div>
        <div className="login-right-side">
          <div className="heading">
            <h2>Welcome Back! Please Log In</h2>
          </div>

          <form onSubmit={handleSubmit} className='form'>
            <div className="inputs ">
              <input type="email" className="form-control" autoComplete='off' placeholder='Email' id="email" value={credentials.email} onChange={onchange} name='email' aria-describedby="emailHelp" />
              <input type="password" placeholder='Password' autoComplete='off' className="form-control" value={credentials.password} onChange={onchange} id="Password" name='password' />
            </div>
            
         
          
            <button type="submit" className="sb-btn" >Submit</button>
            <div className="inst">
              <p>if you don't have account  you need to </p>
              <span><Link to='/signup' className='sign'>signup</Link></span>
            </div>

          </form>

        </div>
      </div>
    </>


  )
}

export default Login
