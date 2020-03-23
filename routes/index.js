const express = require('express');
const Router = express.Router();
const adminRouter = require('./adminRouter');

const Admin = require('../models/admin');

Router.use('/admins', adminRouter);

Router.post('/injection', (req,res,next) => {
    let { email, password, name } = req.body;
    Admin.create({
        email,
        password,
        verification: true,
        name
    })
    .then(function (admin) {
        res.status(200).json(admin)
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = Router;