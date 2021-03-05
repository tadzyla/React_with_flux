const express = require('express'),
      app = express(),
      mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/to-do', (err) => {
    err && console.error(err);
})
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('blank', {
        title: 'Mastering Flux',
        body: 'Hello World hahaha'
    });
});

app.listen(3000, () => {
    console.log('We are running a server');
})