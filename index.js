const express = require("express");
const server = express();
//require bodyparser
const bodyParser = require("body-parser");
//require cors
const cors = require("cors");

//JWT
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

server.use(cors());

//---json-parser config
server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

//---routes definition
const auth = require("./routes/auth");
const createPost = require("./routes/post");

//---routes usage
//this is the route
server.use("/api", auth);
server.use("/post", createPost);

server.use(expressJwt({secret: 'supersecretword'}).unless({path: ['/api/auth']}));



//---server listener
server.listen(8000, ()=>{
    console.log("JWT Auth server service running @ localhost:8000");
});