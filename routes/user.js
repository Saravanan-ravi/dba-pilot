var express = require('express');
var router = express.Router();

router.get("/", async (req, res) => {
    var users = await usersModel.find({ isActive: true });
    res.send(users);
});

router.post("/",async(req,res)=>{
    var username = req.body.username
//    console.log("Logged: "+res.username);
})

router.put("/",async(req,res)=>{
    var id = req.body.id;
});

router.delete("/",async(req,res)=>{
    var id= req.body.id;
})
module.exports = router;