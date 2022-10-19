const fs = require('fs')

const write = function(text="default") {
    fs.writeFileSync('note.txt, text')
}

module.exports = write;