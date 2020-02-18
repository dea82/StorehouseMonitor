const express = require('express');
const controller = require('../../controllers/nodes.controller');

const router = express.Router();

router.route('/').get(controller.getNodes);

module.exports = router;
