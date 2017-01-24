
var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
    firstName: {
      type: String
    },  
    lastName: {
      type: String
    },
    role: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    hash: String,
    salt: String
});

// userSchema.plugin(require('mongoose-unique-validator'));

// userSchema.pre('save', function(next){
//     var user = this;
//     if (!user.isModified('password')) return next();
    
//     if(user.password)
//     {
//         user.salt = crypto.randomBytes(16).toString('hex');
//         user.password = crypto.pbkdf2Sync(user.password, this.salt, 1000, 64).toString('hex');
//     }
//     next();
// });


userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    role: this.role,
    exp: parseInt(expiry.getTime() / 1000),
  }, "Plutio_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('User', userSchema);
