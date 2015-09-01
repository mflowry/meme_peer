var express = require('express');
var router = express.Router();
var meme = require('../models/meme.json');
var messages = require('../models/messages.json');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("THIS IS THE CONSOLE LOG",meme);
    res.render('memes', { memeObj: meme });
});

router.post('/', function(req, res, next){
    var messagesArray = messages;
    messagesArray.push(req.body);

    var file = path.join(__dirname, '../models/messages.json');
    fs.writeFile(file, JSON.stringify(messagesArray), function(err){
        if(err){
            console.log(err);
            next(err);
        } else{
            console.log("I am about to throw an error");
            console.log("wrote Data");
        }
    });
    res.send('Completed');
});



module.exports = router;

