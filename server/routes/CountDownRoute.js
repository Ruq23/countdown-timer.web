const mongoose = require('mongoose')

const express = require("express");
const router = express.Router();
const Event = require('../models/CountDownModel.js');

// const Event = require('../models/blog')


router.get('/greet', (req, res) => {
    res.send('Welcome')
})

router.post('/addEvent', async(req, res) => {
    const { title, description } = req.body
    const event = new Event({ title, description })
    await event.save()
    console.log('Successfully Added Event')
    res.send(`You will be reminded of ${title} in due time`)
})
router.get('/countdown', async(req, res) => {
    const { title, description } = req.body
})

module.exports = router;
