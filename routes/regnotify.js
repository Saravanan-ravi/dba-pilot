// For multer queries: https://expressjs.com/en/resources/middleware/multer.html
const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();



var d = new Date();
var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var myToday = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);







router.post('/notification', upload.fields([{ name: 'pdffilenotification' }]), async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        // console.log('Uploaded Files:', req.files);
        var notifysave;
        const { notification_number, notification_date, notification_received_date, notification_received_time, reception_mode, activity_type, trainaction, effectivefromdate, effectivetodate, pdfstatus, notify_status,notificationupdatedby } = req.body;
        if (pdfstatus === "true") {
            notifysave = usersModel8({
                notification_number,
                notification_date,
                notification_received_date,
                notification_received_time,
                notificationupdatedby,
                notificationupdateddate:myToday,
                notificationupdatedtime:hours,
                reception_mode,
                activity_type,
                trainaction,
                effectivefromdate,
                effectivetodate,
                notify_status,
                pdfstatus,
                pdffilenotification: req.files['pdffilenotification'][0].buffer,
                pdffilenotificationType: req.files['pdffilenotification'][0].mimetype,
            });
        } else {
            notifysave = usersModel8({
                notification_number,
                notification_date,
                notification_received_date,
                notification_received_time,
                notificationupdatedby,
                notificationupdateddate:myToday,
                notificationupdatedtime:hours,
                reception_mode,
                activity_type,
                trainaction,
                effectivefromdate,
                effectivetodate,
                pdfstatus,
                notify_status,
            });
        }
        // Check Received Data in Console
        console.log('Data to save:', notifysave);
        await notifysave.save();
        res.status(201).send({ message: 'Files saved in MongoDB.' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to upload.' });
    }
});




router.post("/jobassigned", async (req, res) => {
    var body = req.body;
    var users = await usersModel8.updateOne({_id:body.id},{jobpickedby:body.username,
        notify_status:"processing"}, async (err, result1) => {
        if (err) {
            res.status(404).send({ message: ">>Invalid Credentials<<" })
        } else { res.status(200).json(result1); }
    });
});


router.post("/jobusercheck", async (req, res) => {
    var body = req.body;                          
    console.log("sun",body);
    var users = await usersModel8.find({ $and: [{ _id:body.id },{jobpickedby:body.username}] })
    console.log(users)
    if(users.length)
    {
        res.status(200).json(users); 
    }
    else
    {
        res.status(404).send({ message: ">>Invalid Credentials<<" })
    }
});



router.post("/jobcompltion", async (req, res) => {
    var body = req.body;
    var users = await usersModel8.updateOne({_id:body.id},{remarksbyuser:body.remarks,
        alertdate:body.alertdate,alertflag:body.alertflag,notify_status:"Awaited for Approval",completdate:myToday,complettime:hours}, async (err, result1) => {
        if (err) {
            res.status(404).send({ message: ">>Invalid Credentials<<" })
        } else { res.status(200).json(result1); }
    });
});



router.post("/aprovalremarks", async (req, res) => {
    var body = req.body;                          
    var users = await usersModel8.find({ _id:body.id })
    if(users.length)
    {
        res.status(200).json(users); 
    }
    else
    {
        res.status(404).send({ message: ">>Invalid Credentials<<" })
    }
});

router.post("/aprovalupdate", async (req, res) => {
    var body = req.body;   
    try {
        var users = await usersModel8.updateOne({_id:body.id},{remarksbyadmin:body.remarksbyadmin,notify_status:"Closed"})
        res.status(200).json(users); 
    } catch (error) {
        res.status(404).send({ message: ">>Invalid Credentials<<" })
    }                       
    
});

router.post("/jobopenstatuscheck",async(req,res)=>{
    var body=req.body;
    try {
        var users = await usersModel8.find({_id:body.id},{notify_status:1})
        res.status(200).json(users); 
    } catch (error) {
        res.status(404).send({ message: ">>Invalid Credentials<<" })
    } 
})


router.post("/alertrevokeupdate",async(req,res)=>{
    var body=req.body;
    console.log(body.alertrevokedupdatedby)
    try {
        var users = await usersModel8.updateOne({_id:body.id},{alertflag:"false",alertremarks:body.alertremarks,alertrevokeupdatedby:body.alertrevokedupdatedby,alertrevokeupdateddate:myToday,alertrevokeupdatedtime:hours})
        res.status(200).json(users); 
    } catch (error) {
        res.status(404).send({ message: ">>Invalid Credentials<<" })
    } 
})


module.exports = router;