const express=require("express")
const app=express()
require("./mongoose")
app.use(express.json())
const studentmodel=require("./studentSchema")
const { set } = require("mongoose")


app.put("/",async(req,resp)=>{
    // const data =await new studentmodel(req.body)
    const result=await studentmodel.updateOne({rollno:req.body.rollno},{$set:{name:req.body.name,marks:req.body.marks}})
    resp.send(result)
}
)
app.listen(5000)