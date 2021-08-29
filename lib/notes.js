const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Note = require('./Note');

function createNote(notesList, note) {
    const newNote = new Note(getNewId(notesList), note.title, note.text);

    if(!notesList)
        notesList = [];
    notesList.push(newNote);

    writeDb(notesList);
    return newNote;
}

function removeNote(notesList, id) {
    let result = false;

    const remove = notesList.findIndex(element => element.id === id);

    if(remove !== -1) {
        notesList.splice(remove, 1);
        result = true;
    }

    writeDb(notesList);
    return result;
}

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string')
        return false;
    if(!note.text || typeof note.text !== 'string')
        return false;
    return true;
}

function getNewId(notesList) {
    let id = generateId();

    while(notesList.findIndex(element => element.id === id) !== -1) {
        id = generateId();
    }
    
    return id;
}

function generateId() {
    return crypto.randomBytes(16).toString("hex");
}

function writeDb(notesList) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesList, null, 2)
    );
}

module.exports = {
    createNote,
    removeNote,
    validateNote
};