class Note {
    constructor(id, title, text) {
        this.id = id,
        this.title = title,
        this.text = text
    }

    getId() {
        if(this.id)
            return this.id;
    }

    getTitle() {
        if(this.title)
            return this.title;
    }

    getText() {
        if(this.text)
            return this.text;
    }
}

module.exports = Note;