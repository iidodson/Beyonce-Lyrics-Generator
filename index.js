const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const express = require("express");
var path = require('path');


const app = express();
const port = 3000;

let lyrics;

app.use(express.static(path.join(__dirname, 'public')));


  

fetch("https://raw.githubusercontent.com/iidodson/Beyonce-Lyrics-Generator/master/lyrics.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        lyrics = data;
    })

app.get("/lyrics", (req, res) => {
    let randInt = Math.floor(Math.random() * lyrics.length)
    res.status(200).send(lyrics[randInt]);
});

app.get('/', function(req, res) {
    res.redirect('index.html');
});


app.listen(process.env.PORT || port, () => console.log("On port:", port));

