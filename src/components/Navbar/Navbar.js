import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    let navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <>
            <div className="header">
              
                    <div className="first">
                    <div className="logo">
                        <Link to="/" className='lg'><h1>iNoteBook</h1></Link>
                        <hr />
                    </div>
                   
                       
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
                  <li>      <Link to="/"className='lg'> <i class="fa-solid fa-trash"></i>Trash</Link></li>
                  <li>      <Link to="/"className='lg'> <i class="fa-solid fa-gear"></i>Setting</Link></li>
                       </ul>
                    </div>
                    <div className="plane">
                        <p><i class="fa-solid fa-trophy"></i>Upgrade your plane</p>
                    </div>
                    <div className="question">
                        <p><i class="fa-solid fa-clipboard-question"></i> Need a little help ?</p>
                    </div>

                    {/* <div className="buttons">
                    {!localStorage.getItem('token') ? <form className="btn">
                        <Link className="login" to="/login" role="button">Login</Link>
                        <Link className="sign" to="/signup" role="button">Signup</Link>
                    </form> : <button className="logout" to="/signup" role="button" onClick={handlelogout}>Logout</button>}
                </div> */}

                </div>

               
        













        </>
    )
}

export default Navbar
