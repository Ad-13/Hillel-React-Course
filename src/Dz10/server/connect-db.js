// docker run --name social-network-mongo -d -p 27017:27017  mongo
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://admin:admin@cluster0.6y8qb.mongodb.net/db_test?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}
);
