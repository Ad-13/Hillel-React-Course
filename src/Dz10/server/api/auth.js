const UserModel = require('../models/user');
const Router = require('express').Router;

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email }, '+password');
  if (!user) {
    return res.status(401).send({ error: 'User is not exist' })
  }
  const token = await user.signIn(password);
  if (token) {
    res.send({ success: true, token  })
  } else {
    return res.status(401).send({ error: 'Password is not correct!' })
  }
});

module.exports = authRouter;
