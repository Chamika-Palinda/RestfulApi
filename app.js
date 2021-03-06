const express = require("express");
const app = express();
const mongoose =require("mongoose");
const usersRoute = require("./routes/users");
const bodyParser = require("body-parser");
require('dotenv/config');
//now we have the ability to create routes 


//Middleware- its like a something that trigger when specific routes are hits
app.use(bodyParser.json());

//just like we can do the authentifications here 

//Import Routes
 const postsRoute =require('./routes/posts');
 app.use('/posts',postsRoute);
 app.use('/users',usersRoute);

//ROUTES
app.get('/',(req,res)=>{
    res.send("We in home");
});



//connect to the db 
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser : true},
()=>console.log("Connected tto the DB") 
)
//How to start listening to the server
app.listen(3000);
