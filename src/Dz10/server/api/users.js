const { Router } = require('express');
const requireAuth = require('../middlewares/requireAuth');
const UserModel = require('../models/user');
const userValidator = require('../middlewares/user-validator');

const userRouter = Router();

// CRUD

const allowOnlyIfEmail = email => (req, res, next) => {
  const loweredEmail = email.toLowerCase();
  if (req.currentUser.email === loweredEmail) return next();
  res.status(403).send({ error: 'You are not allowed to do this' })
};

userRouter.get('/', requireAuth, allowOnlyIfEmail('oandreiev@lohika.com'),  async (req, res) => {
    const users = await UserModel.find({});
    res.send(users);
});

userRouter.post('/', userValidator, async (req, res) => {
    const user = new UserModel(req.body);
    const { _id } = await user.save();
    res.status(201).send({ created_user_id: _id });
  });

userRouter.get('/:userId', async (req, res) => {
  const user = await UserModel.findById(req.params.userId);
  res.send(user);
});

userRouter.put('/:userId', userValidator, async (req, res) => {
  const result = await UserModel.findByIdAndUpdate(req.params.userId, req.body);
  res.status(200).send(result);
});

userRouter.delete('/:userId', async (req, res) => {
  const result = await UserModel.findByIdAndDelete(req.params.userId);
  res.send(result);
});

module.exports = userRouter;
