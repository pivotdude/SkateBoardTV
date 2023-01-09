const express = require('express');
const Video = require("../models/Video");
const User = require("../models/User");
const Playlist = require("../models/Playlist");
const router = express.Router();

function creatRouteUserChannelDataById(link, values, valuesInPopulate = '') {
    router.get(`/channel/:channelId/${link}`, async function (req, res, next) {
        const id = req.params['channelId']
        let result

        if (valuesInPopulate) {
            result = await User.findOne({_id: id}, '-_id ' + values).populate(values, valuesInPopulate).limit(20).skip(0)
        } else {
            result = await User.findOne({_id: id}, '-_id ' + values).limit(20).skip(0)
        }

        res.status(200).json(result)
    })
}

router.get(`/channel/:channelId/`, async function (req, res) {
    const id = req.params['channelId']
    const array = await User.findOne({_id: id}, 'subscribers').limit(20).skip(0).lean()
    const result = await User.findOne({_id: id}, '-_id avatar subscribersNumbers name channelHeader').limit(20).skip(0).lean()

    if (req.user) {
        result['isSubscriber'] =  array.subscribers.includes(req.user.userId)
        result['isAuthor'] = array._id == req.user.userId
    }

    res.status(200).json(result)
})

// creatRouteUserChannelDataById('', 'avatar subscribersNumbers name channelHeader')
creatRouteUserChannelDataById('videos', 'videos', 'date preview title views duration')
creatRouteUserChannelDataById('playlists', 'playlists', '-author')
// creatRouteUserChannelDataById('likes', 'likes', 'date preview title views duration')
creatRouteUserChannelDataById('subscriptions', 'subscriptions', 'name avatar subscribersNumbers')
creatRouteUserChannelDataById('about', 'description regDate')


router.get(`/channel/:channelId/likes`, async function (req, res, next) {
    const id = req.params['channelId']
    const array = await User.findOne({_id: id}, '-_id likes').limit(20).skip(0)
    const result = []
    for (i of array.likes) {
        result.push(await Video.findOne({_id: i}, 'title preview duration date author views').populate('author', 'name avatar -_id'))
    }

    res.status(200).json(result)
})


router.get(`/playlist/:playlistId`, async function (req, res, next) {
    const id = req.params['playlistId']
    console.log(id)
    const array = await Playlist.findOne({_id: id}, '-_id').populate('author', 'name avatar -_id').populate('videos', 'date preview title views duration')


    let result = []
    for (i of array.videos) {
        result.push(await Video.findOne({_id: i}, 'title preview duration date author views').populate('author', 'name avatar').limit(20).skip(0))
    }
    // result = Object.assign(array, result)

    console.log(result)
    res.status(200).json(result)
})

//________________________________________________________________________________VIDEOS //
router.get('/videos/:videoId',
    async function (req, res, next) {
        let videoId = req.params["videoId"]
        let results = await Video.findOne({_id: videoId}, '-tags -_id').populate('author', 'name avatar subscribersNumbers').lean()

        if (req.user) {

            const authorId = await Video.findOne({_id: videoId}, 'author -_id').lean()
            const watcher = await User.findOne({_id: req.user.userId}).lean()

            results['isLiked'] =  watcher.likes.includes(videoId)
            results['isDisliked'] = watcher.dislikes.includes(videoId)
            results['isSubscriptions'] = watcher.subscriptions.includes(authorId.author)
            results['isAuthor'] = req.user.userId === authorId.author
        }

            // .populate('comments.from', '-login -password -likes -subscribe -subscribers -videos -viewed -regDate')
        res.json(results)
    }
)

router.get('/discover',
    async function (req, res, next) {
        let results = await Video.find({}).populate('author', 'name avatar').sort({views: -1}).limit(20)
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
            let results = await Video.find({ tags: {$in: array}}).populate('author', 'name avatar')
                .sort({views: -1})
                .limit(20)
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
