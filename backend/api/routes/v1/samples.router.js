const express = require('express');
const controller = require('../../controllers/samples.controller');

const router = express.Router();

router.route('/').get(controller.getSamples);
router.route('/').post(controller.postSample);

module.exports = router;
