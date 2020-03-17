const mongoose = require('mongoose');

const cmsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be emtpy']
    },
    category: {
        type: String,
        required: [true, 'Please choose category']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    }
})

const CMS = mongoose.model('CMS', cmsSchema);

module.exports = CMS;