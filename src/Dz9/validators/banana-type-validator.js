const fs = require('fs');

module.exports = (req, res, next) => {
  const newBanana = req.body;
  const bananas = JSON.parse(fs.readFileSync('api/bananas.json'));
  if (bananas.some(banana => banana.type === newBanana.type)) {
    return res.status(400).send({
      error: 'We already have this type of banana!'
    });
  }
  return next();
};
