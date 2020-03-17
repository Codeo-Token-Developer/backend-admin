const express = require('express');
const Router = express.Router();
const adminAuthRouter = require('./admin.auth.route');
const adminFunctionRouter = require('./admin.function.route');
const feeRouter = require('../routes/Fee.route');

Router.use('/admins/auth', adminAuthRouter);
Router.use('/admins/function', adminFunctionRouter);
Router.use('/admins/fee', feeRouter);

module.exports = Router;