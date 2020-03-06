const express = require('express');
const Router = express.Router();
const sendEmailUserRegister = require('../middlewares/sendEmailUserRegister');
const { Authentication, AdminAuthorization } = require('../middlewares/auth');
const AdminUserController = require('../controllers/adminUserController');

Router.post('/users', Authentication, AdminAuthorization,AdminUserController, sendEmailUserRegister);
Router.get('/users', Authentication, AdminAuthorization, AdminUserController.readAllUser);
Router.get('/activeUsers', Authentication, AdminAuthorization, AdminUserController.readAllActiveUser);
Router.patch('/kyc', Authentication, AdminAuthorization, AdminUserController.approvalKYC);

module.exports = Router;