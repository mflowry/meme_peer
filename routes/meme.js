var express = require('express');
var router = express.Router();
var meme = require('../models/meme.json');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("THIS IS THE CONSOLE LOG",meme);
    res.render('memes', { memeObj: meme });
});

router.post('/:id?', function(req, res){

    console.log(req.body);
    res.send('Post page');

});

module.exports = router;

