const httpStatus = require('http-status');
const samplesService = require('../services/samples.service');

exports.getSamples = async (req, res, next) => {
  const response = await samplesService.getSamples();
  res.status(httpStatus.OK).json(response);
  next();
};
