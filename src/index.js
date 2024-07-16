const express = require('express');
const { PORT, MONGO_PATH } = require('./utils/env');
const Mongo = require('./db/Mongo');
const path = require('path');

const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload())
const Router = require('./router');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


Mongo.connect(MONGO_PATH)
app.use(express.json());
app.use(express.urlencoded({extended:true}))




 

 
app.use(express.static(path.join(__dirname,"public"))) 


app.use('/',Router) 

app.use( '*' ,(req,res)=>{
    res.redirect('/')
})
   
 
 
  



app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
}) 