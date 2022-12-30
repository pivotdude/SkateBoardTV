let express = require('express');
let Video = require("../models/Video");
let User = require("../models/User");
let Playlist = require("../models/Playlist");
let router = express.Router();
let mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

router.all('/profile',
    async function (req, res, next) {
        // res.send('|')

        if (req.method == 'OPTIONS') {
            return res.status(200).send()
        }


        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const results = await User.findOne({_id: req.user.userId}, 'avatar name -_id')
        console.log(req.user)
        res.json(results)
    }
)


router.post(
    '/registration',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', "Пароль должен состоять минимум из 6 символов").isLength({min: 6}),
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

            const {email, password, name} = req.body


            const candidate = await User.findOne({email: email})
            console.log(candidate)
            if (candidate) {
                return res.status(400).json({success: false, message: 'Пользователь на эту почту уже зарегестрирован'})
            }

            const id = Math.random().toString(16).slice(2)
            const hasedPassword = await bcrypt.hash(password, 12)
            const user = new User({_id: id, email, password: hasedPassword, name}) // В место массива в последствии передавать value из localstorage
            await user.save()

            res.status(201).json({success: true, message: "Пользователь создан"})

        } catch (e) {
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
        await results.populate('author', '-login -password -likes -subscribe -subscribers -videos -viewed')
        await results.populate('comments.from', '-login -password -likes -subscribe -subscribers -videos -viewed -regDate')   //.findOne({id: videoId})
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
            let results = await Video.find({ tags: {$in: array}})
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
