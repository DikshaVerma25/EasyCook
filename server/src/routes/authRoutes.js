
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcont');

// Login form
router.get('/login', (req, res) => {
  res.render('login');
});

// Login post request
router.post('/login', authController.login);

// Logout
router.get('/logout', authController.logout);

module.exports = router;
