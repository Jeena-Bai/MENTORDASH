const mongoose = require('mongoose');

const EvaluationSchema = new mongoose.Schema({
  submissionId:Number,
  marks: Number,
  comments:String,
  evaluated_By: String // Assume mentor name or ID

})
const value=mongoose.model('evaluation', EvaluationSchema);
module.exports = value