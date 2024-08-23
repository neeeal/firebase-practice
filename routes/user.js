const express = require('express');
const router = express.Router();
const controller = require("../controllers/user");

router.get('/', (req, res) => {
    res.status(200).send({
    message: "Initial user route"
    })
});

router.post('/', controller.post);
router.put('/:uid', controller.put);
router.put('/disable/:uid', controller.disable);
router.put('/enable/:uid', controller.enable);
router.delete('/:uid', controller.delete);

module.exports = router;