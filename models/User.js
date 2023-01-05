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
            unique: true
        },
    ],
    videos: [
        {
            type: String,
            ref: 'Video',
            unique: true
        },
    ],
    playlists: [
        {
            type: String,
            ref: 'Playlist',
            unique: true
        },
    ],
    subscriptions: [
        {
            type: String,
            ref: 'User',
            unique: true
        },
    ],
    likes: [
        {
            type: String,
            ref: 'Video',
            unique: true
        }
    ],
    viewed: [
        {
            type: String,
            ref: 'Video',
            unique: true
        }
    ]
})

module.exports = model('User', schema)
