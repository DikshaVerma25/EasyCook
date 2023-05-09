const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
});

// Hash password before saving user to database
userSchema.pre('save', async function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Authenticate user based on email and password
userSchema.statics.authenticate = async function(email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    return user;
  }

  return null;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
