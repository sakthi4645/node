const express = require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');


const app=express();
app.use(bodyparser.urlencoded({extended:true}));

var controller=require('./controller/post.control');



app.set('view engine','ejs');



// //schema
// var userSchema = new mongoose.Schema({
//     name:String,
//     image:String,
//     description:String
// });

// var User = mongoose.model('User',userSchema);

// app.get('/', function(req, res){
//     User.find({}, function(err,allusers){
//         if(!err){
//             res.render('home',{users:allusers});
//         }else{
//             console.log(err);
//         }
//     })
// });

// //new user form
// app.get('/new', function(req, res){
//     res.render('new');
// });

// //new user post route
// app.post('/new',function(req, res){
//     var n = req.body.name,
//         i = req.body.image,
//         d = req.body.description;

//     var user ={
//         name:n,
//         image:i,
//         description:d
//     }

//     User.create(user, function(err, newuser){
//         if(!err){
//             res.redirect('/');
//         }else{
//             console.log(err);
//         }
//     })
// })


mongoose.connect('mongodb://localhost:27017/userDB',{useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(!err){
        console.log('database connected');
    }else{
        console.log('database error'+err);
    }
});


app.listen(3000, () =>{
    console.log('server connected');
});

app.use('/',controller);