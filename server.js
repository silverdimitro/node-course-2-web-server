const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials')
app.get('/',(req,res)=>{
  //
  res.render('home.hbs',{
    pageTitle:'Home Page',
    message:'welcome to home page',
    currentYear:new Date().getFullYear()
  });
});

app.get('/about',(req,res)=>{

  res.render('about.hbs',{
    pageTitle:'About page',
    message:'welcome to about page',
    currentYear: new Date().getFullYear()
  });

});

app.get('/bad',(req,res)=>{
  res.send({errorMessage:'errorMessage'});
});


app.listen(port,()=>{
  console.log(`server is up on ${port}`);
});
