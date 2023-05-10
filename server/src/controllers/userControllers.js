const User = require('../models/user');
  

async function getCurrentUser(req, res) {
  try {
    const user = await User.findById(req.user.userId);
    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
}


module.exports = {
  getCurrentUser
};
