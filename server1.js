const express = require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post("/",function(req,res){
    var n1=NUMBER(req.body.num1);
    var n2=NUMBER(req.body.num2);
    var result=n1+n2;
    console.log(result);


});

app.listen(3000,function(){
    console.log("server started");
});

