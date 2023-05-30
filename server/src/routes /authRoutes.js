const express = require('express');
const authController = require('../controllers/authControllers');
const userController = require('../controllers/userControllers');
const middleware = require('../utils/middleware');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);


router.get('/me', middleware.authenticate, userController.getCurrentUser);

module.exports = router;
