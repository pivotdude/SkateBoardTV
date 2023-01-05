const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    title: String,
    preview: {type: String, default: '/images/default/noPreview.png'},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    author: {type: String, ref: 'User'},
    date: {type: Date, default: new Date()},
    views: {type: Number, default: 0},
    description: String,
    duration: Number,
    tags: [],
    comments: [
        {
            from: {
                type: String,
                ref: 'User'
            },
            content: String,
            date: Date,
            like: Number,
            dislike: Number
        }
    ]
})

module.exports = model('Video', schema)
