 const express= require('express');

 const bodyParser= require('body-parser');

 const ejs= require('ejs');

 const app= express();

 const items=["Open laptop","login","timesheet entry"];

 app.set('view engine','ejs');

 app.use(bodyParser.urlencoded({extended: true}));

 app.use(express.static("public"));

 app.get("/",function(req,res){
   const today= new Date();
   const options ={
     weekday: "long",
     day: "numeric",
     month: "long"
   };
  const day=today.toLocaleDateString("en-us",options);
  res.render("list",{KindOfDay: day, nameOfitem: items});

 })

 app.post("/",function(req,res){
   items.push(req.body.nameOfitem);
   res.redirect("/");
 })

app.listen(3000,function(){
  console.log("Server is up and running");
})
