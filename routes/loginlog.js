var express = require('express');
var router = express.Router();

router.post("/savelog", async (req, res) => {
    var body = req.body;
    console.log("USER LOG" + body.UsrName);
    var myLoginglog = new usersModel6({
        UsrName: body.UsrName,
        UsrDate: body.UsrDate,
        UsrRemark: body.UsrRemark
    });
    await myLoginglog.save();
    res.send("Success")
});

module.exports = router;