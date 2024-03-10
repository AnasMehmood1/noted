import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
const Addnote = () => {
    const context = useContext(NoteContext)
    const {notes,addNote} = context;

    const [note, setNote] = useState({title:" ",description:"",tag:""})

    const handleclick = (e)=>{
        e.preventDefault()
         addNote(note.title,note.description,note.tag)
    }

    const onchange = (e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onchange} />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onchange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
                </form>

            </div>
        </>
    )
}

export default Addnote
