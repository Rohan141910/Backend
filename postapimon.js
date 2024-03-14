const express=require("express")
const app=express()
require("./mongoose")
app.use(express.json())
const studentmodel=require("./studentSchema")


app.post("/",async(req,resp)=>{
    const data =await new studentmodel(req.body)
    const result=await data.save()
    resp.send(result)
})
app.listen(5000)