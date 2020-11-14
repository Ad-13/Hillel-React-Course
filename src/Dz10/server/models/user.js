const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const secret = 'alahamora';

const SALT_FACTOR = 10;

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false,
    set: rawPassword => bcrypt.hashSync(rawPassword, SALT_FACTOR)
  }
});

// UserSchema.methods.signIn = function (password) {
//   return bcrypt.compare(password, this.password).then((result) => {
//     if (result) {
//       return jwt.sign({ _id: this._id }, secret, { expiresIn: '30s'});
//     }
//   })
// };

// UserSchema.statics.verifyToken = function (token) {
//   return new Promise((res, rej) => {
//     jwt.verify(token, secret, function(err, decoded) {
//       if (err) return rej(err);
//       return res(decoded);
//     });
//   })
// };

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
