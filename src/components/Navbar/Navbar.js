import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    let navigate = useNavigate();
    const handlelogout = () =>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    
    return (
        <>
        <div className="header">
            <div className="nav">
            <div className="logo">
           <Link to="/" className='lg'><h1>iNoteBook</h1></Link>
           <Link className="nav-link lg"  to="/">Home</Link>

            </div>
           
           </div>
           
           <div className="buttons">
           {!localStorage.getItem('token')?<form className="btn">
                            <Link className="login"to="/login" role="button">Login</Link>
                            <Link className="sign" to="/signup" role="button">Signup</Link>
                            </form>:<button className="logout" to="/signup" role="button"onClick={handlelogout}>Logout</button>}
           </div>
        </div>
            
                  
              
               
                       
                          
                               
                        
                
                      
                    
                   
            
        </>
    )
}

export default Navbar
