const express = require('express');
const Router = express.Router();
const authController = require('../controllers/authController');
const { Authentication, AdminAuthorization } = require('../middlewares/auth')

// Router.post('/',authController.create)
Router.post('/', Authentication, AdminAuthorization, authController.create);
Router.post('/login', authController.login);

module.exports = Router;