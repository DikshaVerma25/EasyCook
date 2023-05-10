const mongoose = require('mongoose');

async function connect() {
  const uri = process.env.MONGODB_URI;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  };
  await mongoose.connect(uri, options);
  console.log('Connected to database');
}

module.exports = {
  connect
};
