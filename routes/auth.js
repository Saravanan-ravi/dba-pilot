var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require("../config");
const crypto = require('crypto');

router.post("/login", async (req, res) => {
    try {
        var username = req.body.username;
        var password = req.body.password;
        var saltresult = await usersModel.find({ username: username, isActive: true });
        resStr41 = JSON.stringify(saltresult);
        resJSON41 = JSON.parse(resStr41);
        console.log(resJSON41[0].passsalt)
        hash = crypto.pbkdf2Sync(password, resJSON41[0].passsalt, 1000, 64, `sha512`).toString(`hex`);
        var result = await usersModel.find({ username: username, password: hash, isActive: true });
        if (result.length) {
            var userInfo = result[0];
            jwt.sign({ id: userInfo._id }, config.secretkey, async function (err, token) {
                await usersModel.updateOne({ _id: userInfo._id }, { token: token })
                // console.log(userInfo.username+userInfo.role+token)
                res.status(200).send({ username: userInfo.username, role: userInfo.role, dude: userInfo.dude, token: token })
            });
        } else {
            res.status(404).send({ message: "Invalid Credentials" });
        }
    } catch (error) {
        //  console.log("User Credientials Error");
        res.status(404).send({ message: "Credentials Error" });
    }
});


router.post("/logout", async (req, res) => {
    var token = req.body.token;
    try {
        await usersModel.updateOne({ token: token }, { token: null });
    } catch (ex) {
        console.log(ex)
    }
    res.send("loggedout");
})

router.post("/recover", async (req, res) => {
    try {
        var username = req.body.username;
        var secretquestion = req.body.secretquestion;
        var secretanswer = req.body.secretanswer;
        var saltresult = await usersModel.find({ username: username, isActive: true });
        resStr41 = JSON.stringify(saltresult);
        resJSON41 = JSON.parse(resStr41);
        hash = crypto.pbkdf2Sync(secretanswer, resJSON41[0].anssalt, 1000, 64, `sha512`).toString(`hex`);
        var result = await usersModel.find({ username: username, secretanswer: hash, isActive: true, secretquestion: secretquestion });
        if (result.length) {
            res.status(200).send(result)
        } else {
            res.status(404).send(result)
        }
    } catch (error) {
        //  console.log("Error While Recovering Credientials");
        res.status(404).send({ message: "Contact IT-CELL for Verification." });
    }
});

router.post("/updatepassword", async (req, res) => {
    try {
        var username = req.body.username;
        var password = req.body.password
        var passwordsalt = crypto.randomBytes(16).toString('hex');
        var passwordhash = crypto.pbkdf2Sync(password, passwordsalt, 1000, 64, `sha512`).toString(`hex`);

        var myquery = { username: username, isActive: true };
        var newvalues = { $set: { password: passwordhash, passsalt: passwordsalt } };

        var saltresult = await usersModel.updateOne(myquery, newvalues);
        resStr41 = JSON.stringify(saltresult);
        resJSON41 = JSON.parse(resStr41);
        console.log(resJSON41)
        res.status(200).send(saltresult)
    } catch (error) {
        //  console.log("Error While Updating Password");
        res.status(404).send({ message: "Contact IT-CELL for Verification." });
    }
});

router.post("/checkusername", async (req, res) => {
    try {
        var username = req.body.username;

        var result = await usersModel.find({ username: username });
        if (result.length) {
            res.status(200).send(result)
        } else {
            res.status(404).send(result)
        }
    } catch (error) {
        // console.log("Error While Checking Credientials");
        res.status(404).send({ message: "Contact IT-CELL for Verification." });
    }
});


router.get("/notactivated", async (req, res) => {
    try {
        var result = await usersModel.find({ isActivated: "false" });
        if (result.length) {
            res.status(200).send(result)
        } else {
            res.status(404).send(result)
        }
    } catch (error) {
        res.status(404).send({ message: "Error Fetching Non-Activation" });
    }
});

router.post("/activationupdate", async (req, res) => {
    try {
        var result = await usersModel.updateOne({ dude: req.body.dude, isActivated: "true" }, { isActive: "false" });
        var result = await usersModel.updateOne({ username: req.body.username, isActivated: "false" }, { isActivated: "true", isActive: "true" });
        if (result.length) {
            console.log(result)
            res.status(200).send(result)
        } else {
            res.status(404).send(result)
        }
    } catch (error) {
        res.status(404).send({ message: "Activation Hasn't Updated" });
    }
});

router.post("/activationonrolechange", async (req, res) => {
    try {
        var result = await usersModel.updateOne({ dude: req.body.dude, isActivated: "true" }, { isActive: "false" });
        var result = await usersModel.updateOne({ username: req.body.username, isActivated: "false" }, { isActivated: "true", isActive: "true", role: req.body.role });

        if (result.length) {
            console.log(result)
            res.status(200).send(result)
        } else {
            res.status(404).send(result)
        }
    } catch (error) {
        res.status(404).send({ message: "Activation Role Change Hasn't Updated" });
    }
});

module.exports = router;