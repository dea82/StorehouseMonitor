const httpStatus = require('http-status');
const gcpCoreIoTService = require('../services/gcpcoreiot.service');

exports.getNodes = async (req, res, next) => {
  const nodes = await gcpCoreIoTService.getNodes();
  res.status(httpStatus.OK).json(nodes);
  next();
};
