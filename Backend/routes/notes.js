const express = require("express")
const fetchuser = require("../middleware/fetchuser")
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Notes = require('../models/notes');

// ROUTE 1: Get All the Notes using: GET "/api/notes/createuser". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// ROUTE 2: Add a New Note using: POST "/api/notes/createuser".  login required
router.post("/addnote", fetchuser, [
    body('title', 'Enter a Valid Title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savenote = await note.save()
        
        res.json(savenote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})


// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote".  login require
router.put("/update/:id", fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
          // Create a new Note object
    const newNote = {};
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    //   Find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found")
    }

    if(note.user.toString() !== req.user.id){
        return  res.status(401).send("Not Allowed")
    }
           
    note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote}, {new:true})
    res.json({note})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  

})

// ROUTE 4: Deleting an existing Note using: DELETE "/api/notes/deletenote".  login require
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
         //   Find the note to be deleted and deleted it
    let note = await Notes.findById(req.params.id);
    if(!note){
        return res.status(404).send("Not Found")
    }

    // Allow deletion only if user owns this Note
    if(note.user.toString() !== req.user.id){
        return  res.status(401).send("Not Allowed")
    }
           
    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success" : "Note has been deleted" , note:note})
    }  catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


   

})



module.exports = router
