const { Router } = require('express');

const magic = require('./magics');
const users = require('./users');
const signUp = require('./signup');
const auth = require('./auth');

const apiRouter = Router();

apiRouter.use('/auth', auth);
apiRouter.use('/magics', magic);
apiRouter.use('/users', users);
apiRouter.use('/signup', signUp);

module.exports = apiRouter;
