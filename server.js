var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/auth/google', function(req, res){
    res.render('first-view');
});
app.get('/auth/i_masz.pl', function(req, res){
    res.sendFile(__dirname + '/oo.jpg');
});

app.listen(3000);
