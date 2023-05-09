const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Cook', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up session store
const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/Cook',
  collection: 'sessions'
});
// Catch errors
store.on('error', function(error) {
  console.error(error);
});

// Set up session middleware
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
  store: store
}));

// Set up middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Set up view engine
app.set('view engine', 'ejs');

// Set up routes
app.use('/', authRoutes);

