var express = require('express');
var router = express.Router();

router.post("/savelog", async (req, res) => {
    var body = req.body;
    console.log("USER LOG" + body.UsrName);
    var mylogData = new usersModel5({
        UsrName: body.UsrName,
        UsrRole: body.UsrRole,
        UsrDate: body.UsrDate,
        UsrIPv4: body.UsrIPv4,
        UsrIPv6: body.UsrIPv6,
        UsrMAC: body.UsrMAC,
        UsrOldItem: body.UsrOldItem,
        UsrOldAmount: body.UsrOldAmount,
        UsrNewEditedItem: body.UsrNewEditedItem,
        UsrNewEditedAmount: body.UsrNewEditedAmount,
        UsrDelStation: body.UsrDelStation,
        UsrDelProduct: body.UsrDelProduct,
        UsrDelItem: body.UsrDelItem,
        UsrDelAmount: body.UsrDelAmount,
        UsrSuperOption: body.UsrSuperOption,
        UsrRemark: body.UsrRemark
    });
    await mylogData.save();
    res.send("Success")
});

module.exports = router;