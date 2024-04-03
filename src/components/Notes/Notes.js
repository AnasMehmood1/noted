import React, { useContext, useEffect, useRef ,useState } from 'react'

import Noteitem from './Noteitem';
import Addnote from "./Addnote"
import { useNavigate } from 'react-router-dom';
import NoteContext from '../../context/notes/NoteContext';
const Notes = (props) => {
  const context = useContext(NoteContext)
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
 

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }
   else{
    navigate('/noted');
   }
    // eslint-disable-next-line
  }, [])

  const updateNote = (currentNote) => {

    // ref.current.click()
    setNote({id: currentNote._id ,etitle: currentNote.title , edescription: currentNote.description , etag: currentNote.tag})
    setIsModalOpen(true); // Open the modal
  }

  const ref = useRef(null);
  const close = useRef(null);

  const [note, setNote] = useState({ id:"",etitle:" ",edescription:"",etag:""})
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleclick = (e)=>{
    e.preventDefault()
    //  ref.current.click()
    console.log("updating note " ,note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    props.showAlert("updated successfully","success")
    setIsModalOpen(false); // Close the modal
}

const onchange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
    <Addnote showAlert={props.showAlert}/>
  
   {isModalOpen && (
  <div className="modal-backdrop">
    <div className="modal-custom">
      <div className="modal-header">
        <h3>Edit Note</h3>
         <div className="close-btn" onClick={() => setIsModalOpen(false)}>Close</div>
      </div>
      <div className="modal-body">
        <form className='model-form'>
          <input type="text" value={note.etitle} name="etitle" onChange={onchange} />
     
          <input type="text" value={note.edescription} name="edescription" onChange={onchange} />
      
          <input type="text" value={note.etag} name="etag" onChange={onchange} />
          <button className='update-btn' type="button" onClick={handleclick}>Update Note</button>
        </form>
      </div>
    </div>
  </div>
)}

     
        <div className="container " style={
        { display:'flex'}
        }>
        {notes.length === 0 && 'Start typing your note..'}
   
      
        {notes.map((note) => {
          return <Noteitem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />
        })}
          </div>
    </> 
  )
}

export default Notes
