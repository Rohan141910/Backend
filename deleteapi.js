const express=require("express")
const dbconnect=require("./mongodb")
const app=express()
app.use(express.json())

// app.get("/",async (req,resp)=>{
    app.delete("/",async (req,resp)=>{
    var conn=await dbconnect()
    var data=await conn.deleteOne({rollno:req.body.rollno})
    resp.send(data)

})
app.listen(4000)