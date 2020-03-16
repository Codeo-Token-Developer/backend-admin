const express = require('express');
const Router = express.Router();
const adminAuthRouter = require('./admin.auth.route');
const adminFunctionRouter = require('./admin.function.route');

Router.use('/admins/auth', adminAuthRouter);
Router.use('/admins/function', adminFunctionRouter);

module.exports = Router;