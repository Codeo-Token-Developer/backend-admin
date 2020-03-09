const User = require('../models/user');
const Admin = require('../models/admin');


class adminFeatureController {


    static TotalUsers(req,res,next) {
        User.find({})
            .then(function(users) {
                res.status(200).json({status: 200, users})
            })
            .catch(next);
    };

    static ActiveUsers(req,res,next) {
        User.find({verification: true})
        .then(function (users) {
            res.status(200).json({users, status: 200})
        })
        .catch(next)
    };  

    static verifiedUsers(req,res,next) {
    
    };

    static totalTransaction(req,res,next) {

    };

    static userRegisterToday(req,res,next) {

    };

    static totalActiveWallet(req,res,next) {

    };

    static totalCodeo(req,res,next) {

    };

};


module.exports = adminFeatureController;