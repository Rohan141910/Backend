const http=require("http")
const jsondata=require(./data)
http.createServer((req,resp)=>{
    resp.write(JSON.stringify(jsondata))
    resp.end()
}).listen(4000)