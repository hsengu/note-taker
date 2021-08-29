const router = require('express').Router();
const notes = require('../../db/db');
const { createNote, removeNote, validateNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if(validateNote(req.body)) {
        const note = createNote(notes, req.body);
        res.json(note);
    }
    else
        res.status(400).send('The note is not properly formatted!');
});

module.exports = router;