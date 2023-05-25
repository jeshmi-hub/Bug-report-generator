const express = require("express");

const router = express.Router();

router.get("/users",(req,res)=>{
    res.json("This is a user router")
})

module.exports = router;