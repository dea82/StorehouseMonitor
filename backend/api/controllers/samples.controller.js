const httpStatus = require('http-status');
const samplesService = require('../services/samples.service');

exports.getSamples = async (req, res, next) => {
  const samples = await samplesService.getSamples();
  res.status(httpStatus.OK).json(samples);
  next();
};

exports.postSample = async (req, res, next) => {
  const { temperature } = req.body;
  const sample = await samplesService.createSample(temperature);
  res.status(httpStatus.CREATED).json(sample);
  next();
};
