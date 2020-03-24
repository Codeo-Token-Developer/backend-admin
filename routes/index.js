const express = require('express');
const Router = express.Router();
const adminAuthRouter = require('./admin.auth.route');
const adminFunctionRouter = require('./admin.function.route');
const feeRouter = require('./Fee.route');
const cmsRouter = require('./admin.cms.router');
const emailVerificationRouter = require('./emailVerification.route');

Router.use('/admins/auth', adminAuthRouter);
Router.use('/admins/function', adminFunctionRouter);
Router.use('/admins/fee', feeRouter);
Router.use('/admins/cms', cmsRouter);
Router.use('/api/auth/verify', emailVerificationRouter);

module.exports = Router;