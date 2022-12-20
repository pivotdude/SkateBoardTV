const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    name: String,
    login: String,
    password: String,
    regDate: {type: Date, default: new Date},
    avatar: {type: String, default: '/images/avatars/default.png'},
    description: {type: String, default: ''},
    subscribersNumbers: {type: Number, default: 0},
    subscribers: [
        {
            type: String,
            ref: 'User'
        },
    ],
    videos: [
        {
            type: String,
            ref: 'Video'
        },
    ],
    subscribe: [
        {
            type: String,
            ref: 'User'
        },
    ],
    likes: [
        {
            type: String,
            ref: 'Video'
        }
    ],
    viewed: [
        {
            type: String,
            ref: 'Video'
        }
    ]
})

module.exports = model('User', schema)
