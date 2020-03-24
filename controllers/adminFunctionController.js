const Admin = require('../models/admin');
const User = require('../models/user');
const KYC = require('../models/kyc');
const Account = require('../models/account');
const BankAccount = require('../models/bankAccount');
const CreditCard = require('../models/creditCard');
const Crypto = require('../models/crypto');
const AccountHistory = require('../models/accountHistory');

class AdminFunctionController {

    static readAllUser(req,res,next) {
        User.find({})
            .then(function(users) {
                res.status(200).json({users, status: 200})
            })
            .catch(next)
    };

    static createUser(req,res,next) {
        let { name, email, passoword } = req.body;
        User.create({name, email, password})
            .then(function (user) {
                res.status(202).json({message: `User ${user.name} has been added`, status: 202})
            })
            .catch(next);
    };

    static readAllActiveUser (req,res,next) {
        User.find({verification: true})
            .then(function (users) {
                res.status(200).json({users, status: 200})
            })
            .catch(next);
    };

    static readAllAdmin(req,res,next) {
        Admin.find({})
            .then(function(admins) {
                res.status(200).json({admins, status: 200})
            })
            .catch(next)
    };

    static deleteAdmin(req,res,next) {
        let adminId = req.params.adminId;
        Admin.deleteOne({_id: adminId})
            .then(function() {
                res.status(201).json({message: 'Admin has been deleted', status: 201})
            })
            .catch(next);
    };

    static deleteUser(req,res,next) {
        let userId = req.params.userId;
        User.deleteOne({_id: userId})
            .then(function () {
                return KYC.deleteOne({user: userId});
            })
            .then(function () {
               return CreditCard.deleteOne({user: userId});
            })
            .then(function() {
               return BankAccount.deleteOne({user: userId});
            })
            .then(function () {
               return Crypto.deleteOne({user: userId});
            })
            .then(function() {
               return AccountHistory.deleteOne({user: userId});
            })
            .then(function() {
               return Account.deleteOne({user: userId});
            })
            .then(function () {
                res.status(202).json({message: 'User and all information about user has been deleted', status: 202})
            })
            .catch(next)
    };

    static readAllAccount(req,res,next) {
        let allAccounts = {};

        Crypto.find({})
            .then(function (crypto) {
                allAccounts.cryptos = crypto;
               return BankAccount.find({})
            })
            .then(function (bank) {
                allAccounts.bankAccounts = bank;
               return CreditCard.find({})
            })
            .then(function (cards) {
                allAccounts.creditCards = cards;
               return KYC.find({})
            })
            .then(function (kycs) {
                allAccounts.kycs = kycs;
               return res.status(200).json({allAccounts, status: 200})
            })
            .catch(next)
    };


    static readAllNotVerified(req,res,next) {
        let notVerifiedAccounts = {};
        Crypto.find({approved: false})
            .then(function(cry) {
                notVerifiedAccounts.cryptos = cry;
                return CreditCard.find({approved: false})
            })
            .then(function (cards) {
                notVerifiedAccounts.creditCards = cards;
                return BankAccount.find({approved: false})
            })
            .then(function (bank) {
                notVerifiedAccounts.bankAccounts = bank;
               return KYC.find({approved: false})
            })
            .then(function (kycs) {
                notVerifiedAccounts.kycs = kycs;
                res.status(200).json({notVerifiedAccounts, status: 200})
            })
            .catch(next);
    }

};

module.exports = AdminFunctionController;