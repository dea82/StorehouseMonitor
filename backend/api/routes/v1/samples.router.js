const express = require('express');
const controller = require('../../controllers/samples.controller');

const router = express.Router();

router.route('/').get(controller.getSamples);

module.exports = router;
