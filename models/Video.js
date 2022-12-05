const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: {type: String, unique: true},
    title: String,
    preview: String,
    likes: Number,
    dislikes: Number,
    author: {type: String, ref: 'User'},
    date: Date,
    views: Number,
    description: String,
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
