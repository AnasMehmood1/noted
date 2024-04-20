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
    const response = await fetch("http://192.168.100.9:5000/api/auth/createuser", {
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
      <div className="login-container">
        <div className="inner">
          <div className="left">
            <img src="./hero.jpg" alt="" />
          </div>
          <div className="right">
            <form  className='form' onSubmit={handleSubmit}>
              <div className="name">
                <input type="text" className="form-control" autoComplete='off' name='name' placeholder='Name' onChange={onChange} id="name" aria-describedby="emailHelp" />
              </div>
              <div className="email">
                <input type="email" className="form-control" autoComplete='off' placeholder='example@gmail.com' name='email' onChange={onChange} id="email" aria-describedby="emailHelp" />
              </div>
              <div className="password">
                <input type="password" className="form-control" autoComplete='off' placeholder='password' name='password' onChange={onChange} id="password" />
              </div>
              <div className="confirm">
                <input type="password" className="form-control" autoComplete='off' placeholder='confirm password' name='cpassword' onChange={onChange} id="cpassword" />
              </div>
              <button type="submit" className="sb-btn">Submit</button>
              <div className="inst">
                <p>If you already have an account, you need to</p>
                <span><Link to='/login' className='sign'>Login</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
