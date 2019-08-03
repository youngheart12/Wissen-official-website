const express=require('express');
const router=express.Router();
const Contact=require('../../modals/contact');

router.post('/',(req,res)=>{
    const {name,email,phone,message}=req.body;
    if(!name || !email || !message)
   {
       res.status(400).json({msg:"Please enter all fieds"});
   }
    const newContact=new Contact({
        name,
        email,
        phone,
        message
    });
    newContact.save().then(()=>{
        res.json({message:"sended"})
    }).catch((e)=>{
        res.json({
            message:e.message
        })
    })
})
module.exports=router;