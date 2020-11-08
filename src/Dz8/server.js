const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./api');

const app = express();
const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api', apiRouter);

app.use(express.static('./public'));

app.use(
  (req, res) => {
    res.status(404).send(`Page 404! )`);
  }
);

app.use(
  (err, req, res, next) => {
    res.status(500).send(`Serious Error: ${err.message})`);
  }
);

app.listen(
  port ,
  () => {
    console.log('Server is running on port ' + port);
  }
);
