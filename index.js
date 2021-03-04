const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('blank', {
        title: 'Mastering Flux',
        body: 'Hello World 1'
    });
});

app.listen(3000, () => {
    console.log('We are running a server');
})