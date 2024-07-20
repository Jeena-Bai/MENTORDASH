const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  id:{type:Number},
  student_name: { type: String},
  submissionDate: { type: String },
  evaluationStatus: { type: String,default:'pending' },
  marks: { type: Number, default: null },
  batch:String,
  topic:String
});
const newData=mongoose.model('submission', SubmissionSchema);
module.exports = newData
