const dbconnect=require("./mongodb")

async function getdata()
{
    var conn=await dbconnect()
    var  data=await conn.insertOne({rollno:103,name:"Aman",marks:55})
    console.log(data)

}
getdata()