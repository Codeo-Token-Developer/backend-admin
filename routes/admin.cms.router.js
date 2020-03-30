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

function editCMS(req,res,next) {
    let { title, category, description } = req.body;
    let id_cms = req.params.id;
    CMS.findByIdAndUpdate(id_cms,{title, category, description})
        .then(function (cms) {
            res.status(201).json({cms, message: 'CMS Are Updated'})
        })
        .catch(next)
};

function deleteCMS(req,res,next) {
    let id_cms = req.params.id;
    CMS.deleteOne({_id: id_cms})
            .then(function() {
                res.status(201).json({message: 'CMS has been deleted', status: 201})
            })
            .catch(next);
};

Router.post('/', Authentication, AdminAuthorization, createCMS);
Router.patch('/:id', Authentication, AdminAuthorization, editCMS);
Router.delete('/:id', Authentication, AdminAuthorization, deleteCMS);
module.exports = Router;