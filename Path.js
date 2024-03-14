const path=require("path")
const fs=require("fs")
const folpath=path.join(__dirname,"Data")
// console.log(folpath)
const filepath=folpath+"/"+"rohan.txt";
// console.log(filepath)
// fs.writeFileSync(filepath,"Hello My Name is Rohan")
// fs.readFile(filepath,"utf8",(err,Data)=>{
//     if(!err)
//     {
//         console.log(Data)
//     }
//     else{
//         console.log(err)
//     }
// })
// fs.appendFile(filepath,"\nMy name is Golu",(err)=>{
//     if(!err)
//     {
//         console.log("Data added sucessfully")
//     }
// })
// fs.unlinkSync(filepath)