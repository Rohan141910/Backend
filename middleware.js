const express=require("express")
const app=express();
const midd=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Please Enter Age")
    }
    else if(req.query.age<18)
    {
        resp.send("You are Under Age")
    }
    else{
        next();
    }
}
//app.use(midd)
app.get("./",midd,(req,resp)=>{
    resp.send("Home Page")
})
app.get("./service",(req,resp)=>{
    resp.send("Service Page")
})
app.get("./about",(req,resp)=>{
    resp.send("About Page")
})
app.get("./cpntact",(req,resp)=>{
    resp.send("Contact Page")
})
app.listen(4000)