import express from 'express'
const app = express();

app.use(express.urlencoded({extended:false}));

app.set('view engine','ejs');

app.get("/add-user",(req,resp)=>{
   resp.render('addUser');
})

app.post('/submitUser',(req,resp)=>{
 console.log(req.body);
resp.render('submitUser',req.body)
    
});

app.get("/user",(req,resp)=>{
   const user =['anil','sidhu','sam','petter','brush']
   //const isLogin = true;
  resp.render("user",{user:user , isLogin:false});
})


app.listen(3000);