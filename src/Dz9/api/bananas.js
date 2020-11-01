const { Router } = require('express');
const fs = require('fs');

const bananaTypeValidator = require('../validators/banana-type-validator');
const bananaRequiredValidator = require('../validators/banana-required-validator');

const bananasRouter = Router();

bananasRouter.get(
  '/',
  (req, res) => {
    const bananas = JSON.parse(fs.readFileSync(`${__dirname}/bananas.json`));
    res.json(bananas);
  }
);

bananasRouter.get('/:bananaId', (req, res) => {
  const bananaId = +req.params.bananaId;
  const bananas = JSON.parse(fs.readFileSync(`${__dirname}/bananas.json`));
  const currentBanana = bananas.find(banana => banana.id === bananaId);
  if (!currentBanana) {
    res.status(404).send({ error: 'There is no such banana!' });
    return;
  }
  res.send(currentBanana);
});

bananasRouter.post(
  '/',
  bananaRequiredValidator,
  bananaTypeValidator,
  (req, res) => {
    const newBanana = req.body;
    console.log(newBanana);
    const bananas = JSON.parse(fs.readFileSync(`${__dirname}/bananas.json`));
    newBanana.id = Date.now();
    bananas.push(newBanana);
    fs.writeFileSync(`${__dirname}/bananas.json`, JSON.stringify(bananas));
    res.status(201).send('DONE!');
  }
);

bananasRouter.put(
  '/:bananaId',
  bananaRequiredValidator,
  (req, res) => {
    const newBanana = req.body;
    const bananaId = +req.params.bananaId;
    const bananas = JSON.parse(fs.readFileSync(`${__dirname}/bananas.json`));
    const updatedBananas = bananas.map(banana => banana.id === bananaId ? {id: bananaId, ...newBanana} : banana);
    fs.writeFileSync(`${__dirname}/bananas.json`, JSON.stringify(updatedBananas));
    res.status(200).send('Banana renewed!');
  }
);

bananasRouter.delete('/:bananaId', (req, res) => {
  const bananaId = +req.params.bananaId;
  const bananas = JSON.parse(fs.readFileSync(`${__dirname}/bananas.json`));
  const bananaIndex = bananas.findIndex(banana => banana.id === bananaId);
  if (bananaIndex === -1) {
    return res.status(404).send({
      error: 'There is no such banana!'
    })
  }
  bananas.splice(bananaIndex, 1);
  fs.writeFileSync(`${__dirname}/bananas.json`, JSON.stringify(bananas));
  res.send('Banana gone...');
});

module.exports = bananasRouter;
