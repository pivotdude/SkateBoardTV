let express = require('express');
let Video = require("../models/Video");
let User = require("../models/User");
let Playlist = require("../models/Playlist");
let router = express.Router();

router.get('/videos/:videoId',
    async function (req, res, next) {
        let videoId = req.params["videoId"]
        let results = await Video.find({_id: ObjectId(videoId)})
        res.json(results)
    }
)


module.exports = router;
