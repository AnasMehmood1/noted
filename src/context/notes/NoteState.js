import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
       const notesinitial = [
        {
          "_id": "65e4b0c4b73003959c876eb2f",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:17:56.721Z",
          "__v": 0
        },
        {
          "_id": "65e4b12fb70033959c876eb31",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:19:43.338Z",
          "__v": 0
        },
        {
          "_id": "65e4b12fb70033959c876eb33",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:19:43.499Z",
          "__v": 0
        },
        {
          "_id": "65e4b12fb70033959c876eb35",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:19:43.680Z",
          "__v": 0
        },
        {
          "_id": "65e4b12fb70033959c876eb35",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:19:43.680Z",
          "__v": 0
        },
        {
          "_id": "65e4b12fb70033959c876eb35",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:19:43.680Z",
          "__v": 0
        },
        {
          "_id": "65e4b12fb70033959c876eb35",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:19:43.680Z",
          "__v": 0
        },
        {
          "_id": "65e4b12fb70039359c876eb35",
          "user": "65e1f375dbc6517f8dc82506",
          "title": "Our Blog",
          "description": "this is my blog",
          "tag": "blog",
          "date": "2024-03-03T17:19:43.680Z",
          "__v": 0
        },
      
      ]

      const [notes, setNotes] = useState(notesinitial)
    return (

        <NoteContext.Provider value={{notes,setNotes}}>
          {props.children}

        </NoteContext.Provider>
    )
}


export default NoteState;