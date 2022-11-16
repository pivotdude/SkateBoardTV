const {Schema, model} = require(`mongoose`)

const schema  = new Schema({
    title: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    videos: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ]
})

module.exports = model('Playlist', schema)
