var mongoose = require('mongoose');
// replacing db localhost with 127.0.0.1
mongoose.connect("mongodb://127.0.0.1:27017/dba", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var usersSchema = mongoose.Schema({
    username: String,
    password: String,
    dude: String,
    mailid: String,
    phone: String,
    dob: Date,
    role: String,
    token: String,
    isActive: Boolean,
    isActivated:Boolean,
    created_at: Date,
    created_by: String,
    updated_at: Date,
    updated_by: String,
    updated_at: Date,
    secretquestion: String,
    secretanswer: String,
    passsalt: String,
    anssalt: String,
    updated_by: String
}, { collection: "dbacredentials" });

global.usersModel = mongoose.model("dbacredentials", usersSchema);

var usersSchema6 = mongoose.Schema({
    UsrName: String,
    UsrDate: String,
    UsrRemark: String
}, { collection: "loginlog" });
global.usersModel6 = mongoose.model("loginlog", usersSchema6);

var usersSchema7 = mongoose.Schema({
    UsrName: String,
    UsrRole: String,
    UsrDate: String,
    UsrIPv4: String,
    UsrSuperOption: String
}, { collection: "reportlog" });
global.usersModel7 = mongoose.model("reportlog", usersSchema7);

var usersSchema8 = mongoose.Schema({
    notification_number: String,
    notification_date: Date,
    notification_received_date: Date,
    notification_received_time: String,
    reception_mode: String,
    notify_status: String,
    activity_type: String,
    trainaction:String,
    effectivefromdate:Date,
    effectivetodate:Date,
    jobpickedby:String,
    pdfstatus:Boolean,
    remarksbyuser:String,
    alertdate:Date,
    alertflag:Boolean,
    alertremarks:String,
    alertrevokeupdatedby:String,
    alertrevokeupdateddate:Date,
    alertrevokeupdatedtime:String,
    remarksbyadmin:String,
    checkedbyadmin:String,
    completdate:Date,
    complettime:String,
    pdffilenotification: Buffer,
    pdffilenotificationType: String,
    notificationupdatedby:String,
    notificationupdateddate:Date,
    notificationupdatedtime:String
}, { collection: "notifications" });

global.usersModel8 = mongoose.model("notifications", usersSchema8);