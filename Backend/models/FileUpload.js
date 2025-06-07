import mongoose from "mongoose";
const fileSchema=new mongoose.Schema({
   uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  Department: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
  },
  fileName:{
    type: String,
    trim : true,
  },
  fileName: {
    type: String,
  },
  filePath: {
    type: String,
  },
  driveLink:{
    type:String,
  },
  description:{
    type:String,
    trim:true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps:true})
export const File=mongoose.model("File",fileSchema)