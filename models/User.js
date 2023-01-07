const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    name: String,
    email: {type: String, unique: true},
    password: String,
    regDate: {type: Date, default: new Date},
    avatar: {type: String, default: '/images/default/avatar.png'},
    channelHeader: {type: String, default: '/images/default/channelHeader.png'},
    description: {type: String, default: ''},
    subscribersNumbers: {type: Number, default: 0},
    subscribers: [
        {
            type: String,
            ref: 'User',
        },
    ],
    videos: [
        {
            type: String,
            ref: 'Video',
        },
    ],
    playlists: [
        {
            type: String,
            ref: 'Playlist',
        },
    ],
    subscriptions: [
        {
            type: String,
            ref: 'User',
        },
    ],
    likes: [
        {
            type: String,
            ref: 'Video',
        }
    ],
    viewed: [
        {
            type: String,
            ref: 'Video',
        }
    ]
})

module.exports = model('User', schema)
