const {MongoClient}=require("mongodb")
const url="mongodb://0.0.0.0:27017"
const database="hcl"
const client=new MongoClient(url)
async function dbconnect()
{
    var conn=await client.connect()
    var db=conn.db(database)
    return db.collection("student")
  
    

}
module.exports=dbconnect