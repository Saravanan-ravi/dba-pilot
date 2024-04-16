var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
router.post("/findedit", async (req, res) => {
    var body = req.body;
    var users = await usersModel2.find({ saledate: { $gte: body.saledate, $lte: body.saledate } });
    if (users.length) {
        res.status(200).json(users);
    }
    else { res.status(404).send({ message: ">>Invalid Credentials<<" }) }
});

router.post("/findedit1", async (req, res) => {
    var body = req.body;
    var users = await usersModel2.find({ saledate: { $gte: body.saledate, $lte: body.saledate }, division: body.division });
    if (users.length) {
        res.status(200).json(users);
    }
    else { res.status(404).send({ message: ">>Invalid Credentials<<" }) }
});

router.post("/findedit2", async (req, res) => {
    var body = req.body;
    var users = await usersModel2.find({ saledate: { $gte: body.saledate, $lte: body.saledate }, division: body.division, station: body.station });
    if (users.length) {
        res.status(200).json(users);
    }
    else { res.status(404).send({ message: ">>Invalid Credentials<<" }) }
});

router.post("/findeditdelete", async (req, res) => {
    var body = req.body;
    // console.log("sun",body._id);
    var users = await usersModel2.updateOne({ station: body.station, saledate: { $gte: body.saledate, $lte: body.saledate }, product: body.product }, { $pull: { saledetail: { noofitem: body.noofitem, amount: body.amount, _id: ObjectId(body._id) } } }, async (err, result1) => {
        if (err) {
            res.status(404).send({ message: ">>Invalid Credentials<<" })
        } else { res.status(200).json(result1); }
    });
});

router.post("/findeditupdate", async (req, res) => {
    var body = req.body;
    console.log(body.station + body.saledate + body.product + body.onoofitem + body.oamount + body.noofitem + body.amount + body._id)
    var users = await usersModel2.updateOne({ station: body.station, saledate: { $gte: body.saledate, $lte: body.saledate }, product: body.product, "saledetail._id": ObjectId(body._id) }, { $set: { "saledetail.$.noofitem": body.noofitem, "saledetail.$.amount": body.amount } }, async (err, result1) => {
        if (err) {
            res.status(404).send({ message: ">>Invalid Credentials<<" })
        } else { res.status(200).json(result1); }
    });
});

module.exports = router;