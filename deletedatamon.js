const mongoose=require("mongoose")
async function getdata()
{
    await mongoose.connect("mongodb://0.0.0.0:27017/hcl")
    const studentSchema=new mongoose.Schema({
        rollno:Number,
        name:String,
        marks:Number
    })
    const studentmodel=mongoose.model("student",studentSchema)
   
    var result=await studentmodel.deleteOne({rollno:108})
    console.log(result)
}
getdata()