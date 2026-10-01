import express from 'express'
const app = express();

app.set('view engine','ejs')
app.get("/",(req,resp)=>{
  //resp.send("Home Page");
  resp.render('home',{name:'Sidhant sidhu' ,linkdin:'sidhant kumar'} );
})

app.get("user",(req,resp)=>{
  resp.send("user Page");
})

app.listen(5000);