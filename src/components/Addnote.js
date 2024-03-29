import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
const Addnote = (props) => {
    const context = useContext(NoteContext)
    const {notes,addNote} = context;

    const [note, setNote] = useState({title:" ",description:"",tag:""})

    const handleclick = (e)=>{
        e.preventDefault()
         addNote(note.title,note.description,note.tag)
         setNote({title:" ",description:"",tag:""})
         props.showAlert("Added successfully","success")
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
                        <input type="text" className="form-control" id="title" value={note.title} name='title' aria-describedby="emailHelp" onChange={onchange} />
                       
                    </div>
                    <div className="mb-3" >
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={note.description} name='description' onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" value={note.tag} name='tag' onChange={onchange} />
                    </div>
                  
                    <button disabled={note.title.length<2|| note.description.length<2 || note.tag.length<2} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
                </form>

            </div>
        </>
    )
}

export default Addnote
