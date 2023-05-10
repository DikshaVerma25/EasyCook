const express = require('express');
const userController = require('../controllers/userControllers');
const middleware = require('../utils/middleware');

const router = express.Router();

router.get('/me', middleware.authenticate, userController.getCurrentUser);

module.exports = router;
