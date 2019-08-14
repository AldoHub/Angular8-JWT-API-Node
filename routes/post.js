const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/createPost", (req, res, next) => {
   
    
    if(!req.headers.authorization){
        //remove the canActivate guard in order to 
        //test this functionality
        //since with the authguard we grant a token on a login or signup
        return res.status(403).json({
            message: "not authorized"
        })
    }else{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "supersecretword", (err, decoded) => {
            if(err){
                res.status(403).json({
                    message: "Sorry token is not valid"
                })
            }else{
                //safe space
               console.log(req.body, decoded);
            }
        });
       
       
    }
})



module.exports = router;