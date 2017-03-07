const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials')

// app.use((req,res,next)=>{
//   res.render('maintenance.hbs');
// });
app.use((req,res,next)=>{
  var now = new Date().toString();
  var log = `${now} ${req.method}  ${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log+ '\n');
  next();
});

app.use(express.static(__dirname + '/public'));
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
app.get('/projects',(req,res)=>{

  res.render('projects.hbs',{
    pageTitle:'Project page',
    message:'welcome to portfolio page',
    currentYear: new Date().getFullYear()
  });

});

app.get('/bad',(req,res)=>{
  res.send({errorMessage:'errorMessage'});
});


app.listen(port,()=>{
  console.log(`server is up on ${port}`);
});
