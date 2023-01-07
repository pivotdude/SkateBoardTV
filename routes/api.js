let express = require('express');
let Video = require("../models/Video");
let User = require("../models/User");
let Playlist = require("../models/Playlist");
let router = express.Router();
let mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

router.get('/profile',
    async function (req, res, next) {
        // res.send('|')

        // if (req.method == 'OPTIONS') {
        //     return res.status(200).send()
        // }


        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const results = await User.findOne({_id: req.user.userId}, 'avatar name')
        console.log(req.user)
        res.json(results)
    }
)

router.get('/subscriptions',
    async function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const results = await User.findOne({_id: req.user.userId}, 'subscriptions -_id').populate('subscriptions', 'avatar name')
        console.log(req.user)
        res.json(results)
    }
)

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

creatRouteUserChannelDataById('', 'avatar subscribersNumbers name channelHeader')
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

    console.log(array)

    let result = []
    for (i of array.videos) {
        result.push(await Video.findOne({_id: i}, 'title preview duration date author views').populate('author', 'name avatar').limit(20).skip(0))
    }
    // result = Object.assign(array, result)

    console.log(result)
    res.status(200).json(result)
})



router.post('/registration',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', "Пароль должен состоять минимум из 6 символов").isLength({min: 6}),
        check('login', "Логин должен существовать").exists(),
        check('name', "Никнейм должен состоять минимум из 4 букв").isLength({min: 4}),
        check('repeatPassword', "Пароли должны совпадать").custom((value, { req }) => value === req.body.password),
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {

                return res.status(400).json({
                    success: false,
                    message: errors.array()
                })
            }

            const {email, password, name, login} = req.body


            const candidate = await User.findOne({email: email})
            if (candidate) {
                return res.status(400).json({success: false, message: 'Пользователь на эту почту уже зарегестрирован'})
            }

            const candidateE = await User.findOne({_id: login})
            if (candidateE) {
                return res.status(400).json({success: false, message: 'Пользователь на этот логин уже зарегестрирован'})
            }


            // const id = Math.random().toString(16).slice(2)
            const hasedPassword = await bcrypt.hash(password, 12)
            const user = new User({_id: login, email, password: hasedPassword, name}) // В место массива в последствии передавать value из localstorage
            await user.save()

            res.status(201).json({success: true, message: "Пользователь создан"})

        } catch (e) {
            console.log(e)
            res.status(500).json({"message": `${e}`})
        }
    })


router.post(
    '/login',
    async function (req, res) {
        try {
            const {email, password} = req.body
            let user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({success: false, message: 'Пользователя не зарегистрирован'})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({success: false, message: 'Некорректные данные'})
            }
            const token = jwt.sign(
                {userId: user._id},
                process.env.SECRET_TOKEN, // SecretTOKEN
                {expiresIn: '1h'}
            )
            res.json({
                success: true,
                message: '',
                token,
            })
        } catch (e) {
            res.status(500).json({"message": `${e}`})
        }
    })




//________________________________________________________________________________VIDEOS //
router.get('/videos/:videoId',
    async function (req, res, next) {
        let videoId = req.params["videoId"]
        let results = await Video.findOne({_id: videoId}, '-tags -_id')
            .populate('author', 'name avatar subscribersNumbers -_id')
            // .populate('comments.from', '-login -password -likes -subscribe -subscribers -videos -viewed -regDate')
        console.log(results)
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
