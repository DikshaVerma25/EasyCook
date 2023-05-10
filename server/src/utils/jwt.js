const jwt = require('jsonwebtoken');

function createToken(user) {
  const payload = {
    userId: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName
  };
  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, secret, options);
}

module.exports = {
  createToken
};
