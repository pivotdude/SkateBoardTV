const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    name: String,
    login: String,
    password: String,
    regDate: Date,
    avatar: String,
    description: String,
    subscribers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        },
    ],
    subscribe: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    viewed: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ]
})

module.exports = model('User', schema)
