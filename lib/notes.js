const fs = require('fs');
const path = require('path');
const Note = require('../lib/note');

function createNote(notesList, note) {
    notesList.push(new Note(getNewId(notesList), note.title, note.text));

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

function getNewId(notesList) {
    let id = notesList[0].id;
    notesList.forEach(element => {
        if(element.id >= id)
            id = element.id;
    });

    return ++id;
}

module.exports = {
    createNote,
    removeNote,
    validateNote
};