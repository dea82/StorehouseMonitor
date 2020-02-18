const express = require('express');
const httpStatus = require('http-status');

// import all the routes here
const samplesRouter = require('./samples.router');
const nodesRouter = require('./nodes.router');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => {
  res.status(httpStatus.OK).json({
    message: 'OK',
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use('/samples', samplesRouter);
router.use('/nodes', nodesRouter);

module.exports = router;
