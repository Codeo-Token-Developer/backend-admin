const Admin = require('../models/admin');
const { generateToken } = require('../helpers/jwt');
const { checkPass } = require('../helpers/hashPassword');

class AuthController {
    static create(req,res,next) {
        let { name, email, password } = req.body;
        Admin.create({name, email, password})
            .then(function(admin) {
                res.status(202).json({message: 'Admin success added', status: 200, admin})
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
};

module.exports = AuthController;