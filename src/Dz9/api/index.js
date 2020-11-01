const { Router } = require('express');

const bananas = require('./bananas');

const apiRouter = Router();

apiRouter.use('/bananas', bananas);

module.exports = apiRouter;
