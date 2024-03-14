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
    const data=new studentmodel({rollno:108,name:"Golu",marks:67})
    var result=await data.save()
    console.log(result)
}
getdata()