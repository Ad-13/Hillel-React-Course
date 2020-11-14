const UserModel = require('../models/user');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  try {
    const result = await UserModel.verifyToken(token);
    req.currentUser = await UserModel.findById(result._id);
    next()
  } catch (err) {
    res.status(401).send({ error: err.message })
  }
};
