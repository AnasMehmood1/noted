import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesinitial = []

  const [notes, setNotes] = useState(notesinitial)
  // Get all Note 
  const getNotes = async() => {
    

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWYzNzVkYmM2NTE3ZjhkYzgyNTA2In0sImlhdCI6MTcwOTQ4NTA3Mn0.eeWY7x8QAGLz47rbaWZQKGDfwlavQhgDv-HWaik1YpI"
      },

    });
    const json = await response.json()
    console.log(json)
  setNotes(json)

  }



  // Add a Note 
  const addNote = async(title, description, tag) => {
  //   // TODO: API Call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWYzNzVkYmM2NTE3ZjhkYzgyNTA2In0sImlhdCI6MTcwOTQ4NTA3Mn0.eeWY7x8QAGLz47rbaWZQKGDfwlavQhgDv-HWaik1YpI"
      },

       body: JSON.stringify({ title, description, tag }),
    });
   
     const json = await response.json(); // Assuming your API returns the added note
  
    if(response.status === 200){
      // Assuming the API returns the created note object
      setNotes(notes.concat(json));
    } else {
      console.error('Failed to add note', json.message);
    }
  }

  //Delete a Note
  const deleteNote = async(id) => {
    // TODO: API Call
          
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "Delete",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWYzNzVkYmM2NTE3ZjhkYzgyNTA2In0sImlhdCI6MTcwOTQ4NTA3Mn0.eeWY7x8QAGLz47rbaWZQKGDfwlavQhgDv-HWaik1YpI"
      },
    });

    const json = response.json();
    console.log(json)



    console.log("deleting the note" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //  API Call

    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWYzNzVkYmM2NTE3ZjhkYzgyNTA2In0sImlhdCI6MTcwOTQ4NTA3Mn0.eeWY7x8QAGLz47rbaWZQKGDfwlavQhgDv-HWaik1YpI"
      },

      body: JSON.stringify(title,description,tag),
    });
    // const json = response.json();
  
  // Logic to edit in client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }

  }

  }
  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}



export default NoteState;