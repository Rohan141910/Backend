const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
   name:String,
   image:String
})
module.exports=mongoose.model("image",studentSchema)