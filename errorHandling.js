import express from 'express';
const app = express();

app.get("/",(req,resp)=>{
  resp.send("Home page ");
})
app.get("/user",(req,resp)=>{
  resp.send("user page ");
})
app.get("/error",(req,resp)=>{
  resp.send("error page ");
})

function errorhandling(error,req,resp,next){
  resp.status(error.status||500).send("try after some thing")
}
app.use(errorhandling)

app.listen(4000);