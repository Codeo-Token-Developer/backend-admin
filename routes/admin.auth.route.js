const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const { Authentication, AdminAuthorization } = require('../middlewares/auth')
const sendEmailUserRegister= require('../middlewares/sendEmailUserRegister');

// Router.post('/',authController.create)
Router.post('/', Authentication, AdminAuthorization, authController.create, sendEmailUserRegister);
Router.post('/login', authController.login);


module.exports = Router;