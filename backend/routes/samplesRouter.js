const express = require('express');

function routes() {
  const samplesRouter = express.Router();
  samplesRouter.route('/samples').get((req, res) => {
    res.send('Test');
  });

  return samplesRouter;
}

module.exports = routes;
