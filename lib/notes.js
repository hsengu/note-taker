const fs = require('fs');
const path = require('path');
const Note = require('../lib/note');

function createNote(notesList, note) {
    let id = notesList.length + 1;
    notesList.push(new Note(id, note.title, note.text));

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesList, null, 2)
    );
}

function removeNote() {

}

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string')
        return false;
    if(!note.text || typeof note.text !== 'string')
        return false;
    return true;
}

module.exports = {
    createNote,
    removeNote,
    validateNote
};