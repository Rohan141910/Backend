var a =10;
var b=0;
var waitingdata=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },5000);
})
waitingdata.then((data)=>{
    b=data;
    console.log(a+b)
})