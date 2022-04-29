const express = require('express')

const router = express.Router()

const db = require('../models');

// index route should display list of videos like youtube home page
router.get('/', async (req, res, next)=>{
    try{
        const rawVideoData = await db.Video.find({}).populate("channel");
        const formattedVideoData = require('../scripts/formatVideoData')(rawVideoData);
        const context = {videos: formattedVideoData};
        return res.render('home.ejs', context);
    }
    catch(error){
        console.log(error);
        res.error = error;
        return next();
    }
})

module.exports = router