import express from "express"

const app = express()

app.get( "/",(req,resp)=>{
  const users = ['Sidhant','sidhu','happy'];

  let data =`<ul>`;
  for(let i=0;i<users.length;i++){
    data+=`<li> <a href ="user/${users[i]}">${users[i]}</a></li>`
   
  }
  data+=`</ul>`

  resp.send(data)
})
app.get("/user/:name",(req,resp)=>{
     const userName =req.params.name;
  resp.send(`this is ${userName} Profile Page`)
  
})
app.listen(3200);
