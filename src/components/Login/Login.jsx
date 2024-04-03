import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = (props) => {
    
  const [credentials,setCredentials] = useState({email: "" , password: ""}) 


  let navigate = useNavigate();
  const [password,setPassword] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        const response = await fetch("http://192.168.100.9:5000/api/auth/login", {
            method: "POST",
      
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password}),
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // Save the auth token and redirect
         localStorage.setItem('token',json.authtoken)
         localStorage.setItem('name', json.name); 
         props.showAlert(json.name,"login Successfully","success")
         navigate('/');
        }
        else{
          props.showAlert("invalid Crediential","danger")
        }
         
          
    }


    const onchange = (e) =>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    <>
         <div className="login-container">
              <div className="inner">
              <div className="left">
          <img src="./hero.jpg" alt="" />
         </div>
         <div className="right"> 
         <form onSubmit={handleSubmit} className='form'>
        
        <div className="email ">
        
  
          <input type="email" className="form-control" autoComplete='off'  placeholder='example@gmail.com' id="email" value={credentials.email}  onChange={onchange} name='email' aria-describedby="emailHelp"/>
         
        </div>
        <div className="password">
          <input type="password" placeholder='password' autoComplete='off' className="form-control" value={credentials.password} onChange={onchange} id="Password" name='password'/>
        </div>
       
        <button type="submit" className="sb-btn" >Submit</button>
        <div className="inst">
          <p>        if you don't have account  you need to </p>
        <span><Link to='/signup' className='sign'>signup</Link></span>
        </div>

      </form></div>
              </div>
         </div>
    </>
     
    
  )
}

export default Login
