const express=require("express");
const path=require("path");
const engine=require("ejs-mate");
const app=express();
const PORT=3000;




app.set("view engine","ejs");
app.engine("ejs",engine);
app.set("views",path.join(__dirname,"views","products"));


app.get("/",function(req,res){
    res.render("index")
})

app.get("/products",function(req,res){
    res.render("products");
})





app.listen(PORT,function(){
    console.log("Server is running at posr 3000......");
})