const Fee = require('../models/fee');

class FeeController {

    static updateFee(req,res,next) {
        let feeId = req.params.feeId;
        let { fee } = req.body
        Fee.updateOne({_id: id}, {fee})
            .then(function(fee) {
                res.status(201).json({status: 201, fee});
            })
            .cath(next);
    };

    
};

module.exports = FeeController;