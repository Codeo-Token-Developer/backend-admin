const express = require('express');
const Router = express.Router();
const { AdminAuthorization, Authentication } = require('../middlewares/validator');
const adminController = require('../controllers/adminController');

Router.get('/', Authentication, AdminAuthorization, adminController.readAllAdmin);
Router.get('/users', Authentication, AdminAuthorization, adminController.readAllUsers);
Router.get('/accounts', Authentication, AdminAuthorization, adminController.readAllAccounts);
// Router.post('/', Authentication, AdminAuthorization, adminController.create);
Router.post('/', Authentication, AdminAuthorization, adminController.create);
Router.post('/login', adminController.login);
Router.delete('/', Authentication, AdminAuthorization, adminController.deleteUser);


module.exports = Router;