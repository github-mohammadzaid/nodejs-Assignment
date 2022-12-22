
const mongoose = require("mongoose");

const mongoosee = ()=>{
  try {
    mongoose.connect("mongodb+srv://arsh:1234@cluster0.jb2tpjs.mongodb.net/test2");
   
    console.log('Successfullly connected to database');
    
  } catch (error) {
    console.log('mongoose failed',error);
  }
    

}

module.exports=mongoosee();

  
 