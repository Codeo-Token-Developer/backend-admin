const Admin = require('../models/admin');
const User = require('../models/user');
const Account = require('../models/account');
const { checkPass } = require('../helpers/hashPassword');
const { generateToken } = require('../helpers/jwt');

class AdminController {

    static readAllUsers(req,res,next) {
        User.find({})
            .then(function (users) {
                res.status(200).json({users, status: 200})
            })
            .catch(next)
    };  

    static readAllAdmin(req,res,next) {
        Admin.find({})
            .then(function(admins) {
                res.status(200).json({admins, status: 200});
            })
            .catch(next);
    };

    static readAllAccounts(req,res,next) {
        Account.find({})
            .then(function(accounts) {
                res.status(200).json({accounts, status: 200})
            })
            .catch(next);
    };

    static login(req,res,next) {
        let { email, password } = req.body;
        Admin.findOne({email})
            .then(function (admin) {
                if (admin) {
                    let checkingPassword = checkPass(password, admin.password)
                    if (checkingPassword) {
                        let payload = {
                            id: admin.id,
                            email: admin.email
                        }
                        let token = generateToken(payload);
                        res.status(201).json({message: `Welcome ${admin.name}`, status: 201, token})
                    }else {
                        next({message: 'Invalid Email / Password'});
                    }
                }else {
                    next({message: 'Invalid Email / Password'});
                }
            })
            .catch(next);
    };

    static create(req,res,next) {
        let { name, password, email  } = req.body;
        Admin.create({
            name, email, password
        })
        .then(function (admin) {
            res.status(202).json({message: `Admin ${name} success registered`, status: 202, admin})
        })
        .catch(next);
    };

    static deleteUser(req,res,next) {
        let id = req.params.id;
        User.deleteOne({_id: id })
            .then(function() {
                res.status(201).json({message: 'User has been deleted!', status: 201})
            })
            .catch(next);
    };

};

module.exports = AdminController;