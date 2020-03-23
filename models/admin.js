const mongoose = require('mongoose');
const { hashPass } = require('../helpers/hashPassword');

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty']
  },
  email: {
        type: String,
        validate: [{
            validator: function (email) {
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
            },
            message: props => `${props.value} is not valid email format`
        },
        {
            validator: function (value) {
                return this.model('Admin').findOne({email: value})
                .then(function (email) {
                    if (email) {
                        return false
                    }else {
                        return true
                    }
                })
            },
            message: props => `${props.value} already taken, please take another one`
        }
    ],
        required: [true, 'Email is required']
    },
  password: {
    type: String,
    required:[true, 'Password cannot be empty'],
    min: [6, 'Password must 6 or more characters']
  },
  verification: {
    type: Boolean,
    default: false
  }
},{ timestamps: { createdAt: 'created_at' } });


AdminSchema.pre('save', function (next) {
  let pass = hashPass(this.password);
  this.password = pass;
  next();
});

const admin = mongoose.model('Admin', AdminSchema);

module.exports = admin;






