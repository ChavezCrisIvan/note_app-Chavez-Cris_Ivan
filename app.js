const read =  require ('./read')
const write =  require ('./write')
const add = require ('./add')
const present = require('./present')
const del = require ('./del')
const update =require ('./update')

const data = process.argv

//write (data)

var note={}

if (data[2]== 'add'){
    //build an object
    note  = {
        id: data [3],
        Student_Name: data [4],
        Student_Age : data [5]
    }
    //get oldNote value
    var oldNote = read ()
    //add note to note.txt
    add (note,oldNote)
    //present input in the terminal
   
    present(read())

}

if (data [2]== 'read'){
    const present = require ('./present') 
    
    present(read())
}
if (data [2] === 'delete' ){
    let id= data [3]
    let oldNote =  read()
    let del = require('./del')

    del (id, oldNote)
    present(read())

}
if (data [2] === 'update'){
    let id = {
        id: data [3],
        Student_Name: data [4],
        Student_Age : data [5]
    }
    let oldNote = read ()
    update (id ,oldNote)

    present (read())
}