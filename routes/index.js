const express = require('express');
const Router = express.Router();
const adminAuthRouter = require('./admin.auth.route');
const adminFunctionRouter = require('./admin.function.route');
const feeRouter = require('./Fee.route');
const cmsRouter = require('./admin.cms.router');
const emailVerificationRouter = require('./emailVerification.route');
const transactionRouter = require('./admin.transaction');
const adminApprovedRouter = require('./admin.updated.route');

Router.use('/admins/auth', adminAuthRouter);
Router.use('/admins/function', adminFunctionRouter);
Router.use('/admins/fee', feeRouter);
Router.use('/admins/cms', cmsRouter);
Router.use('/api', emailVerificationRouter);
Router.use('/admins/transactions', transactionRouter);
Router.use('/admin/approved', adminApprovedRouter);

module.exports = Router;