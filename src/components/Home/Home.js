import React  from 'react'
import Notes from '../Notes/Notes'



const Home = (props) => {
  const {showAlert} = props
  return (
    <>
   
   <Notes  showAlert={showAlert}/>
    </>
  )
}

export default Home
