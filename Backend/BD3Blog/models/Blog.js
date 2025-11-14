const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        blog: {
            type: String,
            required: true,
            maxLength: 5000,
        },
        likesCount: {
            type: Number,
            default: 0,
        },
        comments: {
            type: [String],
            default: [],
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Blog", blogSchema);