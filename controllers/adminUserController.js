const User = require('../models/user');
const Admin = require('../models/admin');

class AdminUserController {

    static createNewUser(req,res,next) {
        let { name, email, password } = req.body;
        User.create({name, email, password})
            .then(function (user) {
                req.user = user;
                 next();
            })
            .catch(next);
    };

    static readAllUser(req,res,next) {
        User.find({})
            .then(function (user) {
                res.status(200).json(user)
            })  
            .catch(next);  
    };

    static readAllActiveUser(req,res,next) {
        User.find({verification: true})
            .then(function (users) {
                res.status(200).json(users);
            })
            .catch(next);
    };

    static approvalKYC(req,res,next) {
        let userId = req.params.userId;
        User.updateOne({_id: userId}, {kyc: true})
            .then(function () {
                res.status(200).json({message: 'User KYC has been approved'});
            })
            .catch(next);
    };
};

module.exports = AdminUserController;