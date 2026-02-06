import mongoose from 'mongoose'; 

// create schema
// then create model using that schema 

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
 }, {timestamps:true}  //createdAt,updatedAt
); 

const Note = mongoose.model('Note',noteSchema);

export default Note;