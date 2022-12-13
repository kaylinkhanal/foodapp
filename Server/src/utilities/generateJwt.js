
const jwt = require('jsonwebtoken');
module.exports = function generateAccessToken(email) {
    return jwt.sign(email, process.env.SECRET_TOKEN, { expiresIn: '1800s' });
  }