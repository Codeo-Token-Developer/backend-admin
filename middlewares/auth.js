const { verifyToken } = require('../helpers/jwt');
const Admin = require('../models/admin');

function AdminAuthorization(req,res,next) {
    let adminId = req.decoded.id;
    Admin.findOne({_id: adminId})
        .then(function (admin) {
      
            if (admin) {
            
                next();
            }else {
                next({message: 'You dont have authorized to do that'})
            };
        })
        .catch(next)
};

function Authentication(req,res,next) {
    
    let token = req.headers.admintoken;
    if (token) {
        let decoded = verifyToken(token);
        req.decoded = decoded;
        next();
    }else {
        next({message: 'You must login first as admin'})
    }
};

module.exports = {
    AdminAuthorization,
    Authentication
};

