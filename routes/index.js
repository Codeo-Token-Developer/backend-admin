const express = require('express');
const Router = express.Router();
const adminRouter = require('./adminRouter');


Router.use('/admins', adminRouter);


module.exports = Router;