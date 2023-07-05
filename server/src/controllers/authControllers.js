const User = require('../models/user');
const jwt = require('../utils/jwt');

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = jwt.createToken(user);
    res.status(201).json({
      token
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });
    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }
    // const isMatch = await user.comparePassword(req.body.password);
    // if (!isMatch) {
    //   return res.status(401).json({
    //     message: 'Invalid email or password'
    //   });
    // }
    const token = jwt.createToken(user);
    res.json({
      token
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
}

module.exports = {
  signup,
  login
};
