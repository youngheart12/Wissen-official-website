const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
let fs = require('fs-extra');
const Event=require('../../modals/events');
const multer=require('multer');
router.post('/',(req,res)=>{
    const {name,startDate,endDate,tag,details}=req.body;
    const newEvent= new Event({
        name,startDate,endDate,tag,details
    });

    newEvent.save().then((event)=>{
        res.json({
            name:event.name,
            tag:event.tag,
            startDate:event.startDate,
            endDate:event.endDate,
            details:event.details
        })
    }).catch((e)=>{
        res.json(e)
    })
})

router.get('/',(req,res)=>{
    Event.find().then((event)=>{
        res.json(event)
    })
})

const multerConf={
    storage:multer.diskStorage({
        destination:function(req,file,next){
            let type = req.params.type;
            let path = `./upload/${type}`;
            fs.mkdirsSync(path);
            next(null, path)
        },
        filename:function(req,file,next){
            const ext=file.mimetype.split('/')[1];
            next(null,file.fieldname+'-'+Date.now()+'-'+ext);
        }
    }),
    fileFilter:function(req,file,next){
        if(!file){
            next();
        }
        const image=file.mimetype.startsWith('image/');
        if(image){
            next(null,true);
        }else{
            next({message:"File type are not supported"})
        }
    }
};
router.post('/upload',multer(multerConf).single('avatar'),function(req,res){
    if(file){
        console.log(req.file)
        req.body.photo=req.file.filename
    }
})
module.exports=router;