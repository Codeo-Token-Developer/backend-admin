const express = require('express');
const Router = express.Router();
const AdminController = require('../controllers/authController');

Router.patch('/user/auth/verify/:token', AdminController.emailUserVerification);
Router.patch('/admin/auth/verify/:token', AdminController.emailAdminVerification);
module.exports = Router;