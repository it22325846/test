const mongoose = require("mongoose");

const candidateSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true 
    },
    gender:{
        type: String,
        required: true
    },
    event:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    un:{
        type: String,
        required: true
        
    },
    institute:{
        type: String,
        required: true
        
    }
    
});

//const Student = mongoose.model("Student",studentSchema)
module.exports=mongoose.model("Judge",judgeSchema);