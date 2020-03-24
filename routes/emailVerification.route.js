const express = require('express');
const Router = express.Router();
const AdminController = require('../controllers/authController');

Router.patch('/:token', AdminController.emailVerification)

module.exports = Router;