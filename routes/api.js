let express = require('express');
let Video = require("../models/Video");
let User = require("../models/User");
let Playlist = require("../models/Playlist");
let router = express.Router();
let mongoose = require('mongoose')

router.get('/videos/:videoId',
    async function (req, res, next) {
        let videoId = req.params["videoId"]
        let results = await Video.findOne({_id: videoId}, '-tags -_id').populate('author', '-login -password -likes -subscribe -subscribers -videos -viewed').populate('comments.from', '-login -password -likes -subscribe -subscribers -videos -viewed -regDate').then()   //.findOne({id: videoId})
        res.json(results)
    }
)

router.get('/discover',
    async function (req, res, next) {
        let results = await Video.find({}).sort({views: -1}).limit(20)
        res.json(results)
    }
)
router.get('/trending',
    async function (req, res, next) {
        let videos = await Video.find({}).sort({views: -1}).limit(50)
        let results = []
        for (let i of videos) {

            let date1 = i.date
            let date2 = new Date()

            let day = Math.abs(date2 - date1)
            let minuts = day/1000/60
            if (minuts/60/24 >= 1) {
                continue
            }

            results.append(i)
        }
        res.json(results)
    }
)
router.get('/playlist',
    async function (req, res, next) {
        let results = await Playlist.find({})
        res.json(results)
    }
)

// CATEGORY
function createCategoryRoute(link, array) {
    router.get(link,
        async function (req, res) {
            console.log(link)
            console.log(array)
            let results = await Video.find({ tags: {$in: array}})
                .sort({views: -1})
                .limit(20)
            console.log(results)
            res.json(results)
        }
    )
}

createCategoryRoute('/tutorials', ["tutorials", "lessons", "Skate park lessons", "Skateboarding tutorials", "Skateboarding tricks for beginners", "Skate lesson"])
createCategoryRoute('/competition', ["competition"])
createCategoryRoute('/review', ["review"])
createCategoryRoute('/skating', ["skating"])
createCategoryRoute('/other', ["other"])


module.exports = router;
