module.exports = (req, res, next) => {
  const magic = req.body;
  if (magic.name && magic.damage && magic.requiredMana) {
    return next();
  }
  res.status(400).send({
    error: 'Missing required arguments'
  })
};
