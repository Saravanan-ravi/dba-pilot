var express = require('express');
var router = express.Router();

router.post("/savelog", async (req, res) => {
    var body = req.body;
    console.log("USER LOG" + body.UsrName);
    var myReportlog = new usersModel7({
        UsrName: body.UsrName,
        UsrRole: body.UsrRole,
        UsrDate: body.UsrDate,
        UsrIPv4: body.UsrIPv4,
        UsrSuperOption: body.UsrSuperOption,
    });
    await myReportlog.save();
    res.send("Success")
});

module.exports = router;