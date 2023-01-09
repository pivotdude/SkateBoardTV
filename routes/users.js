const express = require('express');
const router = express.Router();
const User = require("../models/User");
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

router.get('/profile',
    async function (req, res, next) {

        if (!req.user) {
            return res.status(401).json({message: 'UnAuthorization'})
        }

        const results = await User.findOne({_id: req.user.userId}, 'avatar name')
        res.json(results)
    }
)


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

module.exports = router;
