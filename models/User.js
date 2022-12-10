const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    name: String,
    login: String,
    password: String,
    regDate: Date,
    avatar: String,
    description: String,
    subscribersNumbers: Number,
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
