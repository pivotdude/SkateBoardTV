const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    _id: String,
    title: String,
    preview: String,
    likes: Number,
    dislikes: Number,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    date: Date,
    views: Number,
    description: String,
    tags: [],
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
