const express = require('express');

// import all the routes here
const samplesRouter = require('./samples.router');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => {
  res.json({
    message: 'OK',
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use('/samples', samplesRouter);

module.exports = router;
