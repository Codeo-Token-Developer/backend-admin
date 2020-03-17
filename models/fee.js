const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    fee: {
        type: Number,
        required: [true, 'Fee cannot be empty'],
    }
});

const fee = mongoose.model('Fee', feeSchema);

module.exports = fee;