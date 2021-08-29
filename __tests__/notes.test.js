const fs = require('fs');
const crypto = require('crypto');
const notes = require('../db/db');
const Note = require('../lib/Note');
const { createNote, removeNote, validateNote } = require('../lib/notes');
jest.mock('fs');

test("creates a new note", () => {
    const notesList = [];
    const note = createNote(notesList, new Note(crypto.randomBytes(16).toString("hex"), 'Test', 'Test text for testing.'));

    expect(note.title).toBe('Test');
    expect(note.text).toBe('Test text for testing.');
    expect(notesList.length).toEqual(1);
});

test("removes a note", () => {
    const notesList = [
        {
            id: 1,
            title: 1,
            text: 1
        },
        {
            id: 2,
            title: 2,
            text: 2
        },
        {
            id: 3,
            title: 3,
            text: 3
        },
    ]

    expect(notesList.length).toEqual(3);
    expect(removeNote(notesList, 2)).toEqual(true);
    expect(notesList.length).toEqual(2);
    expect(removeNote(notesList, 2)).toEqual(false);
    expect(notesList.length).toEqual(2);
});

test("validates a note", () => {
    const notePass = { title: 'Passing title', text: 'Passing text.'};
    const noteFail = { title: 123, text: 456 };

    expect(validateNote(notePass)).toEqual(true);
    expect(validateNote(noteFail)).toEqual(false);
});