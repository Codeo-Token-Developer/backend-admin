const express = require('express');
const Router = express.Router();
const  { AdminAuthorization, Authentication } = require("../middlewares/auth")
const feeController = require('../controllers/feeController');

Router.put("/:feeId", Authentication, AdminAuthorization, feeController.updateFee);

module.exports = Router;