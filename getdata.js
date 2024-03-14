const dbconnect=require("./mongodb")

async function getdata()
{
    var conn=await dbconnect()
    var  data=await conn.find().toArray()
    console.log(data)

}
getdata()