var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var port = 4552;
const router = express.Router();

require("./models/db");

var auth = require("./routes/auth");
var users = require("./routes/user");
var registeruser = require("./routes/registeruser");
var logfile = require("./routes/logfile");
var loginlog = require("./routes/loginlog");
var reportlog = require("./routes/reportlog");
var maclog = require("./routes/maclog");
var editmo = require("./routes/editmo");
var logdisplay = require("./routes/logdisplay");
var regnotify = require("./routes/regnotify");
var fetchnotify = require("./routes/fetchnotify");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function checkAuthenticated(req, res, next) {
    var token = req.body.token || req.query.token;
    //console.log("token::::::",token)
    // var currentTime = new Date().getTime();
    if (token) {
        var userInfo = await usersModel.find({ token: token });
        if (userInfo.length) {
            req.user = userInfo[0];
            next();
        } else {
            return res.status(401).send("unauthorized")
        }
    } else {
        return res.status(401).send("missing_token")
    }
}

async function checkAdmin(req, res, next) {
    if (req.user && req.user.role == "Administrator" || "Supervisor" || "dbaUser") {
        next();
    } else {
        res.status(403).send("notallowed");
    }
}

app.use("/auth", auth);
app.use("/registeruser", registeruser);
app.use("/logfile", logfile);
app.use("/loginlog", loginlog);
app.use("/reportlog", reportlog);
app.use("/maclog", maclog);
app.use("/regnotify", regnotify);
app.use("/fetchnotify", fetchnotify);
app.use("/editmo", editmo);
app.use("/logdisplay", logdisplay);
app.use("/users", checkAuthenticated, checkAdmin, users);

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, function () {
    console.log("Server listening in " + port)
})