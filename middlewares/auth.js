const fb = require('../config/fb.js');

const authenticateUser = async (req, res, next) => {
    const idToken = req.headers.authorization;
    try {
      const decodedToken = await fb.auth().verifyIdToken(idToken);
      req.user = decodedToken; // Attach user data to request object
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };

module.exports = {authenticateUser};