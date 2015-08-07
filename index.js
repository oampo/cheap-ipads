var express = require('express');

var app = express();

app.get('/prices', function(req, res) {
    res.json({
        MacBook: 1100,
        iPod: 40,
        iPad: 250
    });
});

app.listen(8080);

module.exports = app;
