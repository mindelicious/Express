var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile;
var bodyParser = require('body-Parser');
app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
    fs.readFile('./test.json', 'utf-8', function(err, data) {
        if (err) throw err;
        fileContent = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function(req, res) {
    stringifyFile = req.params.note;
    fs.writeFile('./test.json', stringifyFile, function(req, res, next) {
        if (err) throw err;
        console.log('file updated');
    });
});

app.listen(3000);