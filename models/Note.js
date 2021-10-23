const mongoose=require( 'mongoose');

const noteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,'enter the title'],
        unique:true,
        trim:true,
        maxlength:[40,"can't be more than 40 word"]
    },
    description:{
        type:String,
        required:[true,'enter the title'],
        maxlength:[250,"can't be more than 40 word"]
    }
})

export default mongoose.models.Note || mongoose.model('Note',noteSchema)