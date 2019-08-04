const express=require('express');
const mongoose=require('mongoose');
const config=require('config')
const path=require('path');

const app=express();

app.use(express.json());

const db=config.get('mongodbURL');

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log("mongodb connected")
}).catch((e)=>{
    console.log(e);
})

app.use('/api/users', require('./Routes/api/users'));
app.use('/api/auth',require('./Routes/api/auth'));
app.use('/api/events',require('./Routes/api/events'));
app.use('/api/contact',require('./Routes/api/contact'));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port=process.env.PORT||5000;

app.listen(port,()=>{
    console.log(`server started on  ${port}`);
})


module.exports=app;