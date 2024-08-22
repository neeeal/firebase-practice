const express = require('express');
const router = express.Router();
const controller = require("../controllers/user");

router.get('/', (req, res) => {
    res.status(200).send({
    message: "Initial user route"
    })
});

router.post('/', controller.post);

module.exports = router;