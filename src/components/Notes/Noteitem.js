import React, { useContext } from 'react'
import NoteContext from '../../context/notes/NoteContext';
import "./Note.css"
import { toast } from 'react-toastify'; 
const Noteitem = (props) => {
  const context = useContext(NoteContext)
  const {deleteNote} = context;
   const  {note,updateNote} = props;
  return (
    <>

<div className="card">
      <div className="title">
        <h3 className="card-title"> {note.title} </h3>
        <div className='card-icon'>
          <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteNote(note._id); toast.success("Deleted Successfully"); }}></i>
          <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note); }}></i>
        </div>
      </div>
      <p className="card-text">{note.description}</p>
      <p className="card-text">{note.tag}</p>
    </div>
  
    </>
  )
}

export default Noteitem
