var express = require("express");
var app = express();

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/multi-step-form',(req,res)=>{
    res.render('form');
})
app.get('/tab-slider',(req,res)=>{
    res.render('tab');
})
app.get('/design-template',(req,res)=>{
    res.render('design-template');
})

app.set('view engine','ejs');
app.use(express.static('public'));


var PORT = process.env.PORT || 3000;

app.listen(PORT,(req,res)=>{
    console.log("server running on ",PORT);
})