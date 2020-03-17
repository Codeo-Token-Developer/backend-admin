const express = require('express');
const Router = express.Router();
const Fee = require('../models/fee');
const { AdminAuthorization, Authentication } = require('../middlewares/auth');

function updateFee(req,res,next) {
    let { newFee } = req.body;
    console.log(newFee)
    Fee.find({})
        .then(function (fee) {
            let currentFee = fee[0];
            let feeId =  currentFee.id;
            return Fee.updateOne({_id: feeId}, {fee: newFee})
                .then(function () {
                    res.status(201).json({fee: newFee, status: 201})
                })          
        })
        .catch(next);
};

function createFee(req,res,next) {
    console.log(req.body)
    let { fee } = req.body;
    Fee.create({fee})
        .then(function (fee) {
            res.status(200).json({message: 'already have fee', fee})
        })
        .catch(next);
};

Router.patch('/',Authentication,AdminAuthorization,updateFee);
Router.post('/', Authentication,AdminAuthorization,createFee);

module.exports = Router;
