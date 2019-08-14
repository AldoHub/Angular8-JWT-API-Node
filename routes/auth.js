const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//create the post if the token is valid
router.post("/auth/login", (req, res, next) => {
    console.log(req.headers);

    //search for the user inside your database
    if(req.body.email == "aldocaava@hotmail.com" && req.body.password == "123456"){
        let token =  jwt.sign({user: req.body.email}, "supersecretword", {expiresIn: "2h"});
        res.status(200).send({
            token
        })
    }else{
        //send unathorized status
        return res.sendStatus(401);
    }

});

router.post("/auth/signup", (req, res, next) => {
    
    //create your user here
    if(req.body.email == "aldocaava@hotmail.com" && req.body.password == "123456"){
        let token =  jwt.sign({user: req.body.email}, "supersecretword", {expiresIn: "2h"});
        res.status(200).send({
            token
        })
    }else{
        //send unathorized status
        return res.sendStatus(401);
    }
})




module.exports = router;