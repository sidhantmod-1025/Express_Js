import express from 'express'

const app = express();

function checkAgeRouteMiddleWare(req,resp,next){
  console.log(req.query.age);
  if(!req.query.age || req.query.age<18){
    resp.send("You are not allowed this Website")
  }else{
    next();
  }
}

function checkUrlRouteMiddleWare(req,resp,next){
  console.log("This request Url is ", req.url);
  next()
}

app.get('/', (req, resp) => {
  resp.send("<h1>hello routers</h1>")
})

app.get('/login',checkUrlRouteMiddleWare,(req, resp) => {
  resp.send("<h1>Login routers</h1>")
})

app.get('/products',checkAgeRouteMiddleWare,checkUrlRouteMiddleWare, (req, resp) => {
  resp.send("<h1>Products routers</h1>")
})

app.get('/user',checkAgeRouteMiddleWare, (req, resp) => {
  resp.send("<h1>user routers</h1>")
})

app.listen(3200);