const router = require('express').Router();
const notes = require('../../db/db');
const { createNote, removeNote, validateNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    console.log(notes);
    console.log(req.body);
    if(validateNote(req.body))
        createNote(notes, req.body);
    else
        console.log("Not a valid note.");
});

module.exports = router;