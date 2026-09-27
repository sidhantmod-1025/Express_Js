import express from 'express';
const app = express();

//create middleware

/*function ageCheck(req,resp,next){
  if(!req.query.age || req.query.age<18){
  resp.send("<h1>Alert ! You can not access this page</h1>")
  }
  else{
     next();
  }
}
app.use(ageCheck);*/

function ipCheck(req,resp,next){
  const ip = req.socket.remoteAddress
  console.log(ip);
  if(ip.includes(' 192.168.1.33')){
    resp.send("Alert ! you csn not find this page")
  }
  else{
  next();
  }
}
app.use(ipCheck);

app.get("/",(req,resp)=>{
  resp.send("This a home page");
})
app.get("/login",(req,resp)=>{
  resp.send("This a login page");
})
app.get("/admin",(req,resp)=>{
  resp.send("This a admin page");
})

app.listen(6600);