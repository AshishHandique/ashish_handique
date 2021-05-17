const express=require("express");
const bodyParser=require("body-parser");

const app=express;
app.request(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"index.html");
    console.log(__dirname);
});
app.get("/",function(req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var result=num1+num2
res.send("The answer is "+result);

});
app.post("/",function(req,res){
    console.log(req.body.num1);
    res.send("Thanks for posting the form");
});
app.listen(3000,function(){
    console.log("Server has started on port 3000");
});