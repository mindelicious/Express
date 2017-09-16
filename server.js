var express = require('express');
var app = express();
app.use(express.static('sheets'));

app.get('/userform', function (req, res) {
    res.sendFile('/index.html');
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.listen(3000);
