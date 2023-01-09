let express = require('express');
const Video = require("../models/Video");
const User = require("../models/User");
let router = express.Router();

router.get('/like/:videoId',
    async function (req, res) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const id = req.params['videoId']
        await Video.findOneAndUpdate({_id :id}, {$inc : {'likes' : 1}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$push : {'likes' : id}})

        res.json({message: "Success"})
    }
)
router.get('/unlike/:videoId',
    async function (req, res) {
        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }
        const id = req.params['videoId']
        await Video.findOneAndUpdate({_id :id}, {$inc : {'likes' : -1}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$pull : {'likes' : id}})

        res.json({message: "Success"})
    }
)
router.get('/dislike/:videoId',
    async function (req, res) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const id = req.params['videoId']
        await Video.findOneAndUpdate({_id :id}, {$inc : {'dislikes' : 1}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$push : {'dislikes' : id}})

        res.json({message: "Success"})
    }
)
router.get('/undislike/:videoId',
    async function (req, res) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const id = req.params['videoId']
        await Video.findOneAndUpdate({_id :id}, {$inc : {'dislikes' : -1}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$pull : {'dislikes' : id}})

        res.json({message: "Success"})
    }
)

// BY video
router.get('/follow/:videoId',
    async function (req, res) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const id = req.params['videoId']
        const authorId = await Video.findOne({_id: id}, 'author -_id').lean()
        console.log(authorId)

        if (authorId.author ===  req.user.userId) {
            return res.status(406).json({message: 'Self-subscription'})
        }

        // await Video.findOneAndUpdate({_id :id}, {$inc : {'dislikes' : -1}})
        await User.findOneAndUpdate({_id : authorId.author}, {$push : {'subscribers' : req.user.userId}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$push : {'subscriptions' : authorId.author}})
        await User.findOneAndUpdate({_id : authorId.author}, {$inc : {'subscribersNumbers' : 1}})
        //
        res.json({message: "Success"})
    }
)
router.get('/unfollow/:videoId',
    async function (req, res) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const id = req.params['videoId']
        const authorId = await Video.findOne({_id: id}, 'author -_id').lean()
        console.log(authorId)

        if (authorId.author ===  req.user.userId) {
            return res.status(406).json({message: 'Self-subscription'})
        }

        // await Video.findOneAndUpdate({_id :id}, {$inc : {'dislikes' : -1}})
        await User.findOneAndUpdate({_id : authorId.author}, {$pull : {'subscribers' : req.user.userId}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$pull : {'subscriptions' : authorId.author}})
        await User.findOneAndUpdate({_id : authorId.author}, {$inc : {'subscribersNumbers' : -1}})
        //
        // res.json({message: "Success"})
    }
)

// BY channel

router.get('/channel/follow/:channelId',
    async function (req, res) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const authorId = req.params['channelId']

        if (authorId ===  req.user.userId) {
            return res.status(406).json({message: 'Self-subscription'})
        }

        await User.findOneAndUpdate({_id : authorId}, {$push : {'subscribers' : req.user.userId}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$push : {'subscriptions' : authorId}})
        await User.findOneAndUpdate({_id : authorId}, {$inc : {'subscribersNumbers' : 1}})
        res.json({message: "Success"})
    }
)
router.get('/channel/unfollow/:channelId',
    async function (req, res) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const authorId = req.params['channelId']

        if (authorId ===  req.user.userId) {
            return res.status(406).json({message: 'Self-subscription'})
        }

        await User.findOneAndUpdate({_id : authorId}, {$pull : {'subscribers' : req.user.userId}})
        await User.findOneAndUpdate({_id : req.user.userId}, {$pull : {'subscriptions' : authorId}})
        await User.findOneAndUpdate({_id : authorId}, {$inc : {'subscribersNumbers' : -1}})
        res.json({message: "Success"})
    }
)

module.exports = router;