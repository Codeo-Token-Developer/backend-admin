const express = require('express');
const Router = express.Router();
const adminRouter = require('./adminRouter');
const feeRouter = require('./feeRouter');

Router.use('/admins', adminRouter);
Router.use('/fee', feeRouter);

module.exports = Router;