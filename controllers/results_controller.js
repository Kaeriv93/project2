const express = require('express')

const router = express.Router()

const db = require('../models');

router.get('/', async (req, res, next)=>{
    try{
        const search = req.query.search_query;
        let searchTags = search.split(' ');
        const tagSet = new Set(searchTags)
        console.log(searchTags);
        const videos = await db.Video.find({})
        videos.sort((a, b) =>{
            let aTags = a.description.split(' ');
            let bTags = b.description.split(' ');
            console.log(aTags);
            let aMatches = 0;
            let bMatches = 0;
            for(let tag of aTags)
                if(tagSet.has(tag))
                    ++aMatches;
            
            for(let tag of bTags)
                if(tagSet.has(tag))
                    ++bMatches;
            return bMatches - aMatches;
        })
        const context = {videos};

        res.send(videos.slice(2));
        // return res.render('results.ejs', context);
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})
module.exports = router;