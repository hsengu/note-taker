const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Note = require('./Note');


// Create note and add to notes database .json file
function createNote(notesList, note) {
    const newNote = new Note(getNewId(notesList), note.title, note.text);       // Create a new note

    if(!notesList)                 // Validate notes list, if null create a new list
        notesList = [];
    notesList.push(newNote);        // Push new note to notes list.

    writeDb(notesList);             // Write notes list to db.
    return newNote;                 // Return new note.
}

// Remove note and update database .json file
function removeNote(notesList, id) {
    let result = false;                 // Set initial result

    const remove = notesList.findIndex(element => element.id === id);       // Find matching id within notes list

    if(remove !== -1) {                     // If an index is found other than -1 remove note from notes list
        notesList.splice(remove, 1);
        result = true;                      // Result is true
    }

    writeDb(notesList);             // Write modified notes list to database .json file
    return result;              // Return result of this operation
}

// Validate user input for note, title and text must be strings in order to pass validation
function validateNote(note) {
    if(!note.title || typeof note.title !== 'string')
        return false;
    if(!note.text || typeof note.text !== 'string')
        return false;
    return true;
}

// Helper function for getting a new unique id.
function getNewId(notesList) {
    let id = generateId();

    while(notesList.findIndex(element => element.id === id) !== -1) {       // Generate another id if the previous one is not unique
        id = generateId();
    }
    
    return id;
}

// Helper function for generating an id
function generateId() {
    return crypto.randomBytes(16).toString("hex");
}

// Helper function to write to database .json file
function writeDb(notesList) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesList, null, 2)
    );
}

// Export functions
module.exports = {
    createNote,
    removeNote,
    validateNote
};