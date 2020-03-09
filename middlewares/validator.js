const { verifyToken } = require('../helpers/jwt');
const Admin = require('../models/admin');

function Authentication(req,res,next) {
    if (req.headers.admintoken) {
        let decoded = verifyToken(req.headers.admintoken);
        req.decoded = decoded;
        next();
    }else {
        next({message: 'You must login first'})
    };
};

function AdminAuthorization(req,res,next) {
    let id = req.decoded.id;
    Admin.findOne({_id: id})
        .then(function(user) {
            if (user) {
                next();
            }else {
                next({message: 'You dont have authorize to do that'})
            }
        })
        .catch(next);
};

module.exports = {
    Authentication,
    AdminAuthorization
};