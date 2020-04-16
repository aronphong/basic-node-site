const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname+'/contact-me.html'));
});

app.use((err,req,res,next) => {
    res.status(500).send({"Error" : err.stack});
  });

// Catch-all handler 
app.use((req,res, next) => {
    res.status(404);
    res.sendFile(path.join(__dirname+'/404.html'));
});
  
app.listen(8080, () => {
    console.log('basic-info-site listneing on port 8080')
});
