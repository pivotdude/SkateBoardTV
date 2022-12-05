const {Schema, model} = require(`mongoose`)

const schema  = new Schema({
    _id: {type: String, unique: true},
    title: String,
    author: {type: String, ref: 'User'},
    videos: [
        {
            type: String,
            ref: 'Video'
        }
    ]
})

module.exports = model('Playlist', schema)
