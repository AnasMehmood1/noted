import React, { useContext, useState } from 'react'
import NoteContext from '../../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';
import "./Note.css"
import { toast } from 'react-toastify'; //
const Addnote = (props) => {
    const context = useContext(NoteContext)
    const { notes, addNote } = context;
    let navigate = useNavigate();
    const [note, setNote] = useState({ title: " ", description: "", tag: "" })

    const handleclick = (e) => {
        e.preventDefault()
        
        addNote(note.title, note.description, note.tag)
        setNote({ title: " ", description: "", tag: "" })
        toast.success("addnote Successfully"); // Display success toast
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>

            <div className="notes-container">
                <div className="note-text">
                    <div className="note-head">
                    <h2>NOTES</h2><i class="fa-solid fa-book"></i>
                    </div>
                    <div className="note-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <form className="add-note-container">
                    <div className="left-side">
                        <textarea  type="text"  placeholder='Write your thoughts here...' id="description" value={note.description} name='description' onChange={onchange} cols="30" rows="10"></textarea>
                    </div>
                    <div className="right-side">
                        <textarea type="text"  id="title" placeholder='Title your masterpiece..' value={note.title} name='title' onChange={onchange}  cols="30" rows="10"></textarea>

                        <textarea type="text"  placeholder='Tag your note (e.g., Work, Personal)..' id="tag" value={note.tag} name='tag' onChange={onchange}cols="30" rows="10"></textarea>
                    </div>
                    <button disabled={note.title.length<2|| note.description.length<2 || note.tag.length<2} type="submit" className="add-note-btn" onClick={handleclick}> <i class="fa-solid fa-plus"></i> ADD NOTE</button>
                </form>
            </div>


        </>
    )
}

export default Addnote
