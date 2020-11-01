module.exports = (req, res, next) => {
  const banana = req.body;
  if (banana.type && banana.price) {
    return next();
  }
  return res.status(400).send({
    error: 'Something missing in this banana!'
  });
};
