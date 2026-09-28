import express from 'express'
import path from 'path';
const app =express();



app.get("/",(req,resp)=>{
  const filePath = path.resolve('view/home.html')
  //console.log(filePath)
   resp.sendFile(filePath)
})

app.use(express.urlencoded({extended:false})) //Built in MiddleWare Function hai  example 1 in  Built middleWare Function
app.use(express.static('public')) // example 1 in Built middleWare Function
app.get("/login",(req,resp)=>{
   resp.send(`
    <h1>Registration Form</h1>

    <form action="/submit" method="POST">

        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name">

        <br><br>

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email">

        <br><br>

        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter password">

        <br><br>

        <button type="submit">Login</button>

    </form>
    `)
})
app.post("/submit",(req,resp)=>{
  console.log(req.body)

   resp.send("<h1>Submit page</h1>")
})
app.get("/users",(req,resp)=>{
   resp.send("<h1>User Page</h1>")
})

app.listen(3500);