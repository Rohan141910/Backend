const express=require("express")
const dbconnect=require("./mongodb")
const app=express()
app.use(express.json())

// app.get("/",async (req,resp)=>{
    app.post("/",async (req,resp)=>{
    var conn=await dbconnect()
    var data=await conn.insertOne(req.body)
    resp.send(data)

})
app.listen(4000)