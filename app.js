const add = require('./add');
const read = require('./read');
const write = require('./write');
const update = require('./update');
// get user input
const text = process.argv

var note = {}

if(text[2] == 'add') {
    // Build Object
    note = { 
        id: text[3],
        title: text[4],
        body: text[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
}

if(text[2] == 'read') {
    // Import present
    const present = require('./present')
    
    present(read())
}
if(text[2] === 'delete') {
    let id = text[3];
    let oldnote = read();
    let del = require(',/del');
    del(id,oldnote);

    console.log(read());
}
if(text[2] == 'update') {
    let note = {
        id: text [3],
        title: text [4],
        body: text [5],
    }
    const oldNote = read ()
    update(note, oldNote)
    console.log(update)
    
}

