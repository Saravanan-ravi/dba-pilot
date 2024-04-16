const bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();


router.get("/loginlog", async (req, res) => {
    var logs = await usersModel6.find();
  //  console.log("getlog: "+logs);
    res.send(logs);
});

router.get("/reportlog", async (req, res) => {
    var replogs = await usersModel7.find();
  //  console.log("replog: "+replogs);
    res.send(replogs);
});

router.get("/superadminlog", async (req, res) => {
    var admlogs = await usersModel5.find();
  //  console.log("admlog: "+admlogs);
    res.send(admlogs);
});

module.exports = router;