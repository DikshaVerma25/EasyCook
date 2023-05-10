const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  const secret = process.env.JWT_SECRET;
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Unauthorized'
      });
    }
    req.user = decoded;
    next();
  });
}

module.exports = {
  authenticate
};
