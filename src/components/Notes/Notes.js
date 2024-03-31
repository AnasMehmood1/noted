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
    navigate('/login');
   }
    // eslint-disable-next-line
  }, [])

  const updateNote = (currentNote) => {

    ref.current.click()
    setNote({id: currentNote._id ,etitle: currentNote.title , edescription: currentNote.description , etag: currentNote.tag})

  }

  const ref = useRef(null);
  const close = useRef(null);

  const [note, setNote] = useState({ id:"",etitle:" ",edescription:"",etag:""})

  const handleclick = (e)=>{
    e.preventDefault()
     ref.current.click()
    console.log("updating note " ,note)
    editNote(note.id,note.etitle,note.edescription,note.etag)
    props.showAlert("updated successfully","success")
}

const onchange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
    <Addnote showAlert={props.showAlert}/>
      <button ref={ref}  type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onchange}  minLength={2} required />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" value={note.edescription} id="edescription" name='edescription' onChange={onchange} minLength={2} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" value={note.etag} id="etag" name='etag' onChange={onchange} minLength={2} required />
                    </div>
                  
        
                </form>
            </div>
            <div className="modal-footer">
              <button ref={close} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<2|| note.edescription.length<2 || note.etag.length<2} onClick={handleclick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className= "container row my-2">
        <h2>Your Notes</h2>
        <div className="container mx-2">
        {notes.length === 0 && 'No Note to display'}
        </div>
      
        {notes.map((note) => {
          return <Noteitem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
