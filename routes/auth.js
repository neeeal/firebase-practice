const express = require('express');
  const router = express.Router();
  const { authenticateUser } = require('../middlewares/auth');

   router.get('/', (req, res) => {
    res.status(200).send({
    message: "Initial auth route"
    })
});

  router.get('/protected-route', authenticateUser, (req, res) => {
    // Your protected route logic
    res.status(200).send({
      message: "Protected route"
      })
  });
  module.exports = router;