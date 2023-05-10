const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authRoutes = require('./routes /authRoutes');
const userRoutes = require('./routes /userRoutes.js');

dotenv.config();

console.log("before env")
console.log(process.env.MONGODB_URI);
console.log("check");

const app = express();

app.use(morgan('dev'));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error(error));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal Server Error'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
