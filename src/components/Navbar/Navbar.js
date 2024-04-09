import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"
const Navbar = ({showAlert}) => {
  
    let navigate = useNavigate();
    const handlelogout = () => {
      
        localStorage.removeItem('token')
        showAlert( "Logout Successfully", "success");
        navigate('/noted')

    }

    return (
        <>
        {/* for Mobile */}
         <div className="mobile-navbar">
            <div className="mob-logo">
              <h1>noted</h1>
            </div>
            <div onClick={handlelogout} className="mob-log">
            <i class="fa-solid fa-right-from-bracket"></i>logout
            </div>
            
         </div>

         {/* for Desktop  */}
            <div className="header">
              
                    <div className="first">
                    <div className="logo">
                        <Link to="/" className='lg'><h1>noted</h1></Link>
                        <hr />
                    </div>
                    
                    <div className='box'></div>
                    <div className='box1'></div>
                       
                       <div className="search">
                       <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder='Search' />
                       </div>
                       <ul className="nav-item">
                       <li> <Link to="/" className='lg'> <i class="fa-solid fa-house"></i>Home </Link></li>
                  <li>      <Link to="/"className='lg'> <i class="fa-solid fa-bell"></i>Notification</Link></li>
                       </ul>
                       <ul className="nav-item-sec">
                       <li> <Link to="/" className='lg'> <i class="fa-solid fa-bolt"></i>Tips <button className='updated'>updated</button></Link></li>
                  <li>      <Link className='lg'> <i class="fa-solid fa-trash"></i>Trash</Link></li>
                  <li>      <Link to="/"className='lg'> <i class="fa-solid fa-gear"></i>Setting</Link></li>
                  <li  onClick={handlelogout}>      <Link to="/"className='lg log'><i class="fa-solid fa-right-from-bracket"></i>logout</Link></li>
                       </ul>
                    </div>
                    <div className="plane">
                        <p><i class="fa-solid fa-trophy"></i>Upgrade your plane</p>
                    </div>
                    <div className="question">
                        <p><i class="fa-solid fa-clipboard-question"></i> Need a little help ?</p>
                    </div>


                </div>

               
        













        </>
    )
}

export default Navbar
