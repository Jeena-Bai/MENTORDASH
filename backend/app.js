const express=require('express');
const app=new express(); //objct is mandatory.

app.use(express.json())
const morgan=require('morgan');  
const cors=require('cors')
app.use(morgan('dev'));  
app.use(express.json())
app.use(cors())
require('dotenv').config();
const mongoose=require('mongoose');
require('./db/dbConnect');
const router=express.Router();
router.use(express.json())

const project=require('./routes/Router');  //requir using path   //local module import
app.use('/api',project);    //redirect to basic_routes if an api is incoming






//async function main()           //another way to connect to db
//{
  // await mongoose.connect(process.env.mongo_url)
//}

//main()

//.then(console.log("connected to db"))
//.catch(err=>console.log("error"))

app.listen(process.env.PORT,()=>{     //server in listening mode
    console.log(`Server is listening on PORT ${process.env.PORT}`);
})

