const Admin = require('../models/admin');
const { generateToken, verifyToken } = require('../helpers/jwt');
const { checkPass } = require('../helpers/hashPassword');


class AuthController {
    static create(req,res,next) {
        let { name, email, password } = req.body;
        Admin.create({name, email, password})
            .then(function(admin) {
                let payload = {id: admin.id, email: admin.email}
                req.payload = payload;
                next();
            })
            .catch(next)
    };

    static login(req,res,next) {
        let { email, password } = req.body;
        console.log(req.body)
        Admin.findOne({email})
            .then(function (admin) {
                if (admin) {
                    if (checkPass(password, admin.password)) {
                        let payload = {id: admin.id}
                        let token = generateToken(payload);  
                        res.status(201).json({message: `Welcome ${admin.name}, hope you have a nice day`, token, status: 201})
                    }else {
                        next({message: 'Invalid username / password'})
                    }
                }else {
                    next({message: 'Invalid username / password'})
                };
            })
            .catch(next)
    };

    static emailUserVerification(req,res,next) {
        let decoded = verifyToken(req.params.token);
        User.findOneAndUpdate({_id: decoded.id}, {verification: true})
            .then(function(user) {
                res.redirect('https://dapp.codeotoken.com');
            })
            .catch(next);
    };

    static emailAdminVerification(req,res,next) {
        let decoded = verifyToken(req.params.token);
        Admin.findOneAndUpdate({_id: decoded.id}, {verification: true})
            .then(function (admin) {
                res.redirect('https://www.google.com')
            })
            .catch(next)
    }
};

module.exports = AuthController;