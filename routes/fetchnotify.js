const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();

var d = new Date();
var myToday = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);

router.get('/fetchnotification', async (req, res) => {

    try {
        const notifications = await usersModel8.find({ "$or": [{ "notify_status": { $ne: "Closed" } }, { "$and": [{ alertdate: { $lte: myToday } }, { alertflag: "true" }] }] }); // Retrieve all notifications
        res.status(200).json(notifications); // Send the notifications as JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});


router.post('/fetchnotificationuser', async (req, res) => {
    try {
        const notifications = await usersModel8.find({ "$or": [{ "$and": [{ jobpickedby: req.body.username }, { notify_status: "processing" }] }, { notify_status: "Open" }, { "$and": [{ alertdate: { $lte: myToday } }, { alertflag: "true" }] }] });
        // console.log(notifications)
        res.status(200).json(notifications)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});


router.get('/fetchnotificationID/:id', async (req, res) => {
    try {
        const pdfGetter = await usersModel8.findById(req.params.id);
        if (!pdfGetter || !pdfGetter.pdffilenotification) {
            return res.status(404).send({ message: 'No ID proof found' });
        }

        res.set('Content-Type', pdfGetter.pdffilenotificationType);
        res.send(pdfGetter.pdffilenotification);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch ID proof.' });
    }
});

router.get('/fetchdailyreport', async (req, res) => {

    try {

        const notifications = await usersModel8.find({ "$or": [{ alertdate: myToday }, { pickeddate: myToday }, { approvaldate: myToday }, { notificationupdateddate: myToday }, { completdate: myToday }, { alertrevokeupdateddate: myToday }] }); // Retrieve all notifications
        res.status(200).json(notifications); // Send the notifications as JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});

router.get('/activity', async (req, res) => {

    try {
        const notifications1 = await usersModel8.distinct("activity_type"); // Retrieve all notifications
        res.status(200).json(notifications1);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});


router.post('/trainaction1', async (req, res) => {

    try {
        const notifications1 = await usersModel8.find({ activity_type: req.body.activity_type }).distinct("trainaction"); // Retrieve all notifications
        res.status(200).json(notifications1);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});



router.get('/trainaction', async (req, res) => {

    try {
        const notifications2 = await usersModel8.distinct("trainaction"); // Retrieve all notifications
        res.status(200).json(notifications2);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});

router.get('/effectdate', async (req, res) => {

    try {
        const notifications3 = await usersModel8.distinct("effectivefromdate"); // Retrieve all notifications
        res.status(200).json(notifications3); // Send the notifications as JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});


router.post('/effectdate1', async (req, res) => {

    try {
        const notifications3 = await usersModel8.find({ trainaction: req.body.trainaction }).distinct("effectivefromdate"); // Retrieve all notifications
        res.status(200).json(notifications3); // Send the notifications as JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});


router.get('/jobpickedby', async (req, res) => {

    try {
        const notifications4 = await usersModel8.distinct("jobpickedby"); // Retrieve all notifications
        res.status(200).json(notifications4); // Send the notifications as JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});

router.post('/jobpickedby1', async (req, res) => {

    try {
        const notifications4 = await usersModel8.find({ effectivefromdate: req.body.effectivefromdate }).distinct("jobpickedby"); // Retrieve all notifications
        res.status(200).json(notifications4); // Send the notifications as JSON response
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});

router.post('/custom', async (req, res) => {

    // console.log(req.body)
    try {
        const notifications4 = await usersModel8.find(req.body); // Retrieve all notifications
        res.status(200).json(notifications4); // Send the notifications as JSON response
        console.log(notifications4)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Failed to retrieve notifications.' });
    }
});

module.exports = router;