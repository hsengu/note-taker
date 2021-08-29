const crypto = require('crypto');
const Note = require('../lib/Note');

test('creates a note object', () => {
    const note = new Note(crypto.randomBytes(16).toString("hex"), 'Test', 'Test text for testing.');

    expect(note.id).toEqual(expect.any(String));
    expect(note.title).toEqual(expect.any(String));
    expect(note.text).toEqual(expect.any(String));
});

test("gets notes' id", () => {
    const note = new Note(crypto.randomBytes(16).toString("hex"), 'Test', 'Test text for testing.');

    expect(note.getId()).toEqual(expect.any(String));
});

test("gets notes' title", () => {
    const note = new Note(crypto.randomBytes(16).toString("hex"), 'Test', 'Test text for testing.');

    expect(note.getTitle()).toEqual(expect.any(String));
});

test("gets notes' text", () => {
    const note = new Note(crypto.randomBytes(16).toString("hex"), 'Test', 'Test text for testing.');

    expect(note.getText()).toEqual(expect.any(String));
});