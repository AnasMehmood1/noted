import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    
  const [credentials,setCredentials] = useState({email: "" , password: ""}) 


  let navigate = useNavigate();
  const [password,setPassword] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
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
         props.showAlert("login Successfully","success")
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
    <div className='mt-5'>
      <h2 className='my-3'>Login to continue iNoteBook</h2>
      <form onSubmit={handleSubmit} className=''>
        
  <div className="mb-3 ">
  
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email}  onChange={onchange} name='email' aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onchange} id="Password" name='password'/>
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
