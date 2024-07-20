const mongoose=require('mongoose')
const projectSchema=new mongoose.Schema({
   project_name:String,
   description:String,
   mentor_name:String,
   project_number:String,
   batch:String
   

})

const data=mongoose.model('project',projectSchema)
module.exports=data