const fs = require ('fs')

const update = function (note, oldNote){
    const oNote = JSON.parse(oldNote)
    const newNote = oNote.map (function(n,idx){
        if (n.id == note.id) {
            n.Student_Name = note. Student_Name
            n.Student_Age = note.Student_Age
           
        }
        return n
    })
    fs.writeFileSync('./note.txt', JSON.stringify(newNote))
    
}
module.exports= update