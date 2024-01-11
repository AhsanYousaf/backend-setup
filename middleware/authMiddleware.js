const jwt = require('jsonwebtoken');

// Secret key for JWT
const jwtSecret = 'humai';

function authenticateUser(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret, { algorithms: ['HS256'] });
    req.user = decoded;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    next();
  } catch (ex) {
    console.error('Error verifying token:', ex.message);
    res.status(401).json({ message: 'Invalid token.' });
  }
}

module.exports = authenticateUser;
