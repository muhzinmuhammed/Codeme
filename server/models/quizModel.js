
import  { Schema,  model } from "mongoose";



const quizSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
   option1: {
      type: String,
      required: true,
      
    },
    option2: {
      type: String,
      required: true,
    },
    option3: {
      type: String,
      required: true,
    },

    answer:{
        type: String,
        required: true,

    },

   
    
  
   
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true }
);


// Define the model using the model function and export it
const quizModel= model(
  "quiz",
  quizSchema
);
export default quizModel;