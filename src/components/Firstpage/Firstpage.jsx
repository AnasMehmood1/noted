import React from 'react'
import "./First.css"
import { Link } from 'react-router-dom'
const Firstpage = () => {
  return (
    <>
      <div className="first-container">

            <div className="first-text-container">
                     <div className="first-logo">
                      <p> ok ,</p> <h1>noted</h1>
                     </div>
                     <p>This is absolute way to make your notes <br /> easier and save the earth as well. <br /> Anything will be better</p>
                     <div className="signup-btn"><Link className='link' to="/signup">Signup</Link></div>
                     <p>Already Have an Account? <Link className='link' to="/login"><span>Login</span></Link>
                     </p>
            </div>
        </div>
      </>
  )
}

export default Firstpage
