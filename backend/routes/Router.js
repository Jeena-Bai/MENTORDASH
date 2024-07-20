const express=require('express');
const { getProject, getSubmission, addSubmission, addEvaluation} = require('../controllers/MentorController');
const app=new express();
const router=express.Router();


router.get('/get',getProject)

router.get('/getSub',getSubmission)
router.post('/addSub',addSubmission)

router.post('/addEval',addEvaluation)

module.exports=router