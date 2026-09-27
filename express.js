import express from 'express';
const app = express();

/*function checkRoute(req,resp,next){
console.log(req.url);
next();
}
app.use(checkRoute);*/

app.use((req,resp,next)=>{
console.log(req.url);
next();

})

app.get("/",(req,resp)=>{
  resp.send("Home page")
});
  app.get("/user",(req,resp)=>{
  resp.send("User page")
  });
  app.get("/product",(req,resp)=>{
  resp.send("Product page")
  });

  app.listen(5500);

