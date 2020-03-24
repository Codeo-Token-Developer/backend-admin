const express = require('express');
const Router = express.Router();
const adminFunctionController = require('../controllers/adminFunctionController');
const { Authentication, AdminAuthorization } = require('../middlewares/auth');

Router.get('/users', Authentication, AdminAuthorization, adminFunctionController.readAllUser);
Router.get('/users-active', Authentication, AdminAuthorization, adminFunctionController.readAllActiveUser);
Router.get('/admins', Authentication, AdminAuthorization, adminFunctionController.readAllAdmin);
Router.delete('/:adminId', Authentication, AdminAuthorization, adminFunctionController.deleteAdmin);
Router.delete('/:userId', Authentication, AdminAuthorization, adminFunctionController.deleteUser);
Router.get('/allAccounts', Authentication, AdminAuthorization, adminFunctionController.readAllAccount);
Router.get('/allNotVerified', Authentication, AdminAuthorization, adminFunctionController.readAllNotVerified);

module.exports = Router;