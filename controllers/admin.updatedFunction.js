const Crypto = require('../models/crypto');
const AccountHistory = require('../models/accountHistory');
const BankAccount = require('../models/bankAccount');
const CreditCard = require('../models/creditCard');
const KYC = require('../models/kyc');
const user = require('../models/user');

class updatedFunction {
    
    static crypto(req,res,next) {
        let userId = req.params.userId;
        Crypto.findOneAndUpdate({user: userId},{approved: true})
            .then(function (cry) {
                res.status(201).json({message: 'Crypto has been approved', status: 201})
            })
            .catch(next)
            
    };

    static BankAccount(req,res,next) {
        let userId = req.params.userId;
        BankAccount.findOneAndUpdate({user: userId}, {approved: true})
            .then(function(bank) {
                res.status(201).json({message: 'Bank account has been approved', status: 201})
            })
            .catch(next)
    };

    static kyc(req,res,next) {
        let userId  = req.params.userId;
        KYC.findOneAndUpdate({user: userId}, {approved: true})
            .then(function () {

            })
    };

    static creditCard(req,res,next) {
        let userId = req.params.userId;
        CreditCard.findOneAndUpdate({user: userId}, {approved: true})
            .then(function (card) {
                res.status(201).json({message: 'Credit card has been approved', status: 201})
            })
            .catch(next)
    };

};

module.exports = updatedFunction;