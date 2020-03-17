const express = require('express');
const Router = express.Router();
const Transaction = require('../models/allTransaction');
const { Authentication, AdminAuthorization } = require('../middlewares/auth');

Router.get('/', Authentication, AdminAuthorization, (req,res,next) => {
    Transaction.find({})
        .then(function(transactions) {
            res.status(200).json({transactions, status: 200})
        })
        .catch(next)
})

module.exports = Router;