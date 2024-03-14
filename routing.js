const path=require("path")
const fpath=path.join(__dirname,"data")
const express=require("express")
const app=express();
app.get("/",(req,resp)=>{
    resp.sendFile(fpath+"/home.html")
})
app.get("/about",(req,resp)=>{
    resp.sendFile(fpath+"/about.html")
})
app.get("/service",(req,resp)=>{
    resp.sendFile(fpath+"/service.html")
})
app.get("/contact",(req,resp)=>{
    resp.sendFile(fpath+"/contact.html")
})
app.listen(4000)