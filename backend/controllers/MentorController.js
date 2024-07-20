const express=require('express')
const router=express.Router();
router.use(express.json())
const data=require('../models/ProjectModel')
const newdata=require('../models/Submission')
const value=require('../models/Evaluation')


const getProject=async(req,res)=>{
try{
        const item=await data.find({});
//console.log(item)
        res.status(200).json(item)
}
catch(error)
{
    console.log("error")
    res.status(500).json({error:'Internal server error'})
}
}

//submission


const Submission = require('../models/Submission');

const getSubmission=async(req,res)=>{
    try{
        const item=await newdata.find({});
//console.log(item)
        res.status(200).json(item)
}
catch(error)
{
    console.log("error")
    res.status(500).json({error:'Internal server error'})
}
}



const addSubmission=async(req,res)=>{
    try{
        //console.log(req.body)
        var postItem=
    {
        studentName:req.body.studentName,
        submissionDate:req.body.submissionDate,
        evaluationStatus:req.body.evaluationStatus,
        marks:req.body.marks
    
    }
    
    var post=new Blog(postItem)
    await post.save()
    res.status(201).json(postItem)
    
    }
    catch(error)
    {
     console.log("error")
     res.status(500).json({error:'Internal server error'})
    }
    }
  


//evaluation

const addEvaluation=async(req,res)=>{
    try{
        //console.log(req.body)
        var postItem=
    {
        submissionId:req.body.submissionId,
        marks:req.body.marks,
        comments:req.body.comments,
        evaluated_By:req.body.evaluated_By
    
    }
    
    var post=new Blog(postItem)
    await post.save()
    res.status(201).json(postItem)
    
    }
    catch(error)
    {
     console.log("error")
     res.status(500).json({error:'Internal server error'})
    }
    }

    //

    const updateBlog=async(req,res)=>
        {
            try{
                const postItem=await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
                res.status(200).json(postItem)
        }
            
            catch(error){
                console.log("error")
                res.status(500).json({error:'Internal server error'})
            
            }
        }
        
        const deleteBlog=async(req,res)=>
            {
                try{
                    await Blog.findByIdAndDelete(req.params.id)
                    res.status(200).json({message:"deleted"})
            }
                
                catch(error){
                    console.log("error")
                    res.status(500).json({error:'Internal server error'})
                
                }
            }
        
module.exports={getProject,getSubmission,addSubmission,addEvaluation}