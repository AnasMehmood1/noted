import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'; //
import "./Signup.css"

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  let navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const {name,email,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name,email,password }),
    });
    const json = await response.json();
        // Save the auth token and redirect
       
    if(json.success){
  
          localStorage.setItem('token', json.authtoken);
          localStorage.setItem('name', json.name); 
          
          toast.success("Signup Successfully"); // Display success toast
        navigate('/');
  
    }
    else{
      toast.error("Please enter valid credential"); 
  }
        
        
     
   
  }
  
  
  

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="login-main-container">
        <div className="login-left-side"style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url(./login.png)',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundPositionY:"40px",
            height: '85vh'
          }} >
        
          <div className="text">
              <p>This is absolute way to make your notes easier and save the earth as well.  Anything will be better</p>
            </div>
            
            <div className="author-container">
            <div className="author">
             <p className="name">Anas Mehmood</p>
             <p className="list">MERN Stack Developer</p>
             </div>
             <div className="arrow">
          <i className="fa-solid fa-angle-left"></i>
          <i className="fa-solid fa-angle-right"></i>
        </div>
            </div>
          
        </div>
        <div className="login-right-side">
          <div className="heading">
            <h2 className='create'>Create an account</h2>
            <p>Let's get started with your life time free trial.</p>
          </div>

          <form onSubmit={handleSubmit} className='form'>
            <div className="inputs ">
            <input type="text" className="form-control" autoComplete='off' name='name' placeholder='Name' onChange={onChange} id="name" aria-describedby="emailHelp" />
              <input type="email" className="form-control" autoComplete='off' placeholder='Email' id="email" value={credentials.email} onChange={onchange} name='email' aria-describedby="emailHelp" />
              <input type="password" placeholder='Password' autoComplete='off' className="form-control" value={credentials.password} onChange={onchange} id="Password" name='password' />
            </div>
            
         
          
            <button type="submit" className="sb-btn" >Create account</button>
            <div className="inst">
              <p>If you already have an account, you need to </p>
              <span><Link to='/login' className='sign'>login</Link></span>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default Signup
