const express = require('express');
const Router = express.Router();
const CMS = require('../models/CMS');
const { Authentication, AdminAuthorization } = require('../middlewares/auth');

function createCMS(req,res,next) {
    let { title, category, description } = req.body;
    CMS.create({title, category, description})
        .then(function (cms) {
            res.status(201).json({cms, message: 'CMS Are created'})
        })
        .catch(next)
};

Router.post('/', Authentication, AdminAuthorization, createCMS);

module.exports = Router;