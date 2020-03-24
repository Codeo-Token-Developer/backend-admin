const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    avatar: {
        type: String,
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    id_country: {
        type: String,
    },
    date: {
        type: Date,
    },
    verification: {
        type: Boolean,
        default: false
    },
    reff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    refferal_address: {
        type: String,
    },
    approval_verified: {
        type: Boolean,
        default: false
      }
});

const user = mongoose.model('User', UserSchema);

module.exports = user;



