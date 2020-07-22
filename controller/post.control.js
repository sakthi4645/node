const express = require('express');
var router = express.Router();


var User= require('../model/post.model');
 

router.get('/', (req, res) => {
    User.find({}, function(err,doc){
        if(!err){
            res.render('home',{users:doc});
        }else{
            console.log(err);
        }
    })
});

router.get('/new', function(req, res){
    res.render('new');
});

//new user post route
router.post('/new',function(req, res){
    var n = req.body.name,
        i = req.body.image,
        d = req.body.description;

    var user ={
        name:n,
        image:i,
        description:d
    }

    User.create(user, function(err, newuser){
        if(!err){
            res.redirect('/');
        }else{
            console.log(err);
        }
    })
})


module.exports=router;