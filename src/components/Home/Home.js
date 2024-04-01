import React  from 'react'
import Notes from '../Notes/Notes'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'

import "./Home.css"

const Home = (props) => {
  const {showAlert} = props
  return (
    <>
    <div className="flex">
    <Navbar/>
   <div className="home">
   <Hero/>
   <Notes  showAlert={showAlert}/>
   </div>
    </div>
    </>
  )
}

export default Home
