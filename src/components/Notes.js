import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Noteitem from './Noteitem';
import Addnote from './Addnote';
const Notes = () => {
    const context = useContext(NoteContext)
    const {notes,addNote} = context;
  return (
    <>
     <Addnote/>
       <div className="row my-2">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
      return  <Noteitem  key={note._id} note = {note}/>
    })}
    </div>
    </>
  )
}

export default Notes