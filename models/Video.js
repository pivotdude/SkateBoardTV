const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    title: String,
    likes: Number,
    dislikes: Number,
    author: 'link',
    date: Date,
    views: Number,
    description: String,
    comments: [
        {
            from: {
                type: Schema.Types.ObjectId,
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
