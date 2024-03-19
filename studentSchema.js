const mongoose=require("mongoose")
const ImageSchemas=new mongoose.Schema({
   name:String,
   image:String
})
module.exports=mongoose.model("image",ImageSchema)