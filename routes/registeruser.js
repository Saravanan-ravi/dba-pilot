var express = require('express');
var router = express.Router();
const crypto = require('crypto');

router.post("/saveq", async (req, res) => {
    try {
        var body = req.body;
        var myData = new usersModel({
            isActive: body.isActive,
            password: body.password,
            role: body.role,
            username: body.username,
            token: body.token,
        })
        await myData.save();
        res.send("Success")
    } catch (error) {
        // console.log("Error While Validating User");
        res.status(404).send({ message: "Contact IT-CELL" });
    }
});

router.post("/registration", async (req, res) => {
    try {

        var body = req.body;
        var result = await usersModel.find({ username: body.username });
        if (result.length) {
            res.status(200).send(result)

        } else {

            passwordsalt = crypto.randomBytes(16).toString('hex');
            passwordhash = crypto.pbkdf2Sync(body.password, passwordsalt, 1000, 64, `sha512`).toString(`hex`);

            sec_ans_salt = crypto.randomBytes(16).toString('hex');
            sec_ans_hash = crypto.pbkdf2Sync(body.secretanswer, sec_ans_salt, 1000, 64, `sha512`).toString(`hex`);

            var myData = new usersModel({
                isActive: "false",
                isActivated:"false",
                password: passwordhash,
                username: body.username,
                role: body.role,
                token: null,
                secretquestion: body.secretquestion,
                secretanswer: sec_ans_hash,
                passsalt: passwordsalt,
                anssalt: sec_ans_salt,
                dude: body.dude
            })
            await myData.save();
            res.send([{ v: "Success" }])
        }
    } catch (error) {
        //  console.log("Error While Registering User");
        res.status(404).send({ message: "Error in Registering, Contact IT-CELL" });
    }
});


module.exports = router;