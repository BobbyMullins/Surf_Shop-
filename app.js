var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/Assets'));
app.use(express.static(__dirname + '/scripts'));

//routes

app.get('/', function(req, res){
   res.render('home');  
}); 

app.get('/about', function(req, res){
    res.render('about'); 
}); 

app.get('/contact', function(req, res){
    res.render('contact'); 
}); 

app.get('events', function(req, res){
    res.render('events'); 
}); 

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('now being served'); 
}); 