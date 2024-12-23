
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({

    headline: {
        type: String,
        required: [true, 'Headline is required'],
        minlength: [15, 'Headline should have at least 15 characters'],
        maxlength: [90, 'Headline cannot exceed 90 characters'] 
    },

    desc: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [20, 'Description should have at least 20 characters'],
        maxlength: [1000, 'Description cannot exceed 1000 characters']
    },

    link: {
        type: String,
        required: [true, 'Link is required']
    },

    image: {
        type: String,
        required: [true, 'Image is required']
    },

    category: { 
        type: String, 
        enum: ['Technology', 'Sports', 'Politics', 'Other'], 
        required: [true, 'Category is required']
    },

    author: { 
        type: String, 
        default: 'Anonymous' 
    },

    publishedAt: {
        type: Date,
        default : Date.now
    },

},

{ timestamps: true } );

module.exports = mongoose.model('News', newsSchema);


