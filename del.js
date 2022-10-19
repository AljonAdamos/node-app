const fs = require('fs')

const del = function(id, oldNote) {
    const note = JSON.parse(oldNote)

    const newNote = note.filter(function(n, idx) {
    return n.id !== id
})
fs.writeFileSync('./note.text', JSON.stringify(newNote));

}
module.exports = del