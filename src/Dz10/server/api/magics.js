const { Router } = require('express');
const MagicModel = require('../models/magic');
const magicRequiredValidator = require('../middlewares/magic-required-validator');

const magicRouter = Router();

// CRUD
magicRouter.get('/', async (_req, res) => {
  const magics = await MagicModel.find({});
  res.send(magics);
});

magicRouter.get('/:magicId', async (req, res) => {
  const magic = await MagicModel.findById(req.params.magicId);
  res.send(magic);
});

magicRouter.post('/', magicRequiredValidator, async (req, res) => {
  const magic = new MagicModel(req.body);
  const result = await magic.save();
  res.status(201).send(result);
});

magicRouter.put('/:magicId', magicRequiredValidator, async (req, res) => {
  const result = await MagicModel.findByIdAndUpdate(req.params.magicId, req.body);
  res.status(200).send(result);
});

magicRouter.delete('/:magicId', async (req, res) => {
  const result = await MagicModel.findByIdAndDelete(req.params.magicId);
  res.send(result);
});

module.exports = magicRouter;
