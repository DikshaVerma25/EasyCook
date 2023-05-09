const User = require('../models/userModels');

// Login function
exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.authenticate(email, password);
    
    if (user) {
      // Set user session data and redirect to home page
      req.session.userId = user._id;
      res.redirect('/');
    } else {
      // User authentication failed
      res.render('login', { error: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'Something went wrong, please try again later' });
  }
};

// Logout function
exports.logout = (req, res) => {
  // Clear session data and redirect to login page
  req.session.destroy();
  res.redirect('/login');
};
