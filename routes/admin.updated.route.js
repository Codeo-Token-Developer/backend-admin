const express = require('express');
const Router = express.Router();
const update = require('../controllers/admin.updatedFunction');
const { AdminAuthorization, Authentication } = require('../middlewares/auth')

Router.patch('/crypto/:userId',Authentication, AdminAuthorization, update.crypto);
Router.patch('/bankAccount/:userId', Authentication, AdminAuthorization, update.BankAccount);
Router.patch('/creditCard/:userId', Authentication, AdminAuthorization, update.creditCard);
Router.patch('/kyc/:userId', Authentication, AdminAuthorization, update.kyc);

module.exports = Router;