const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const contactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        minlength:10
    },
    message:{
        type:String,
        required:true
    }
})

const Contact=mongoose.model('conatct',contactSchema);
module.exports=Contact;