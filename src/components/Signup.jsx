import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials,setCredentials] = useState( {name:"" ,email: "" , password: "",cpassword: ""}) 
  
  let navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault()
   const {name,email,password}= credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {

        method: "POST",
  
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify({name,email,password}),
      });
      const json = await response.json()
      console.log(json)
  
      if(json.success){
          // Save the auth token and redirect
       localStorage.setItem('token',json.authtoken)
       navigate("/login");
       props.showAlert("Signup Successfully","success")
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
     <div className="container mt-5">
      <h2 className='my-3'>Create an account to use iNoteBook</h2>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' onChange={onchange} id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' onChange={onchange} id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' onChange={onchange} id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='cpassword' onChange={onchange} id="cpassword"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     </div>
    </>
  )
}

export default Signup
