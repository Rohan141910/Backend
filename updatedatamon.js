const mongoose=require("mongoose")
async function getdata()
{
    await mongoose.connect("mongodb://0.0.0.0:27017/hcl")
    const studentSchema=new mongoose.Schema({
        rollno:Number,
        name:String,
        marks:Number
    })
    const studentmodel=mongoose.model("students",studentSchema)
    
    var result=await studentmodel.updateOne({rollno:108},{$set:{name:"Bholu",marks:78}})
    console.log(result)
}
getdata()