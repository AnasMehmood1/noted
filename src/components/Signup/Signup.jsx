import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css"
import { Link } from 'react-router-dom';
const Signup = (props) => {
  const [credentials,setCredentials] = useState( {name:"" ,email: "" , password: "",cpassword: ""}) 
  
  let navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
  
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/login");
      props.showAlert("Signup Successfully", "success");
    } else {
      props.showAlert(json.error || "Signup failed", "danger");
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
  <div className="name">
    
    <input type="text" className="form-control" autoComplete='off' name='name' placeholder='Name' onChange={onchange} id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="email">

    <input type="email" className="form-control" autoComplete='off' placeholder='example@gmail.com' name='email' onChange={onchange} id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="password">

    <input type="password" className="form-control" autoComplete='off' placeholder='password' name='password' onChange={onchange} id="password"/>
  </div>
  <div className="confirm">

    <input type="password" className="form-control" autoComplete='off' placeholder='confirm password' name='cpassword' onChange={onchange} id="cpassword"/>
  </div>
 
  <button type="submit" className="sb-btn">Submit</button>
  <div className="inst">
          <p>        if you already have account  you need to </p>
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
