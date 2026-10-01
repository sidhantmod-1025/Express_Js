 import express from 'express'
 //import morgan from 'morgan'
 import cors from 'cors'
 const app = express();

 //app.use(morgan('dev'))
 app.use(cors());

 app.get("/",(req,resp)=>{
    resp.send("Home Page ")
 })
 app.get("/user",(req,resp)=>{
  resp.json({
    name :"Sidhant",
    course:"BCA"
  });  //resp.send("user Page ")
 })
 app.listen(3000,()=>{
  console.log("server running on port 3000")
 });