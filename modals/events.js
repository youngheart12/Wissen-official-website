const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const EventSchema=new Schema({
    name :{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    avatar:{
        type:Buffer
    }
})
const Events=mongoose.model('event',EventSchema)
module.exports=Events;