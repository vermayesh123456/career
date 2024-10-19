const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign({ userId: user._id }, 'secretKey');
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user._id }, 'secretKey');
  res.json({ user, token });
};

