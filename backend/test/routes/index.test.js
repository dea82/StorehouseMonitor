const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../api/app');

describe('test static api', () => {
  it('should return OK status message', async () => {
    expect.assertions(5);
    const route = '/api/v1/status';
    const res = await request(app).get(route);
    expect(res.statusCode).toStrictEqual(httpStatus.OK);
    expect(res.body).toHaveProperty('message', 'OK');
    expect(res.body).toHaveProperty('timestamp');
    expect(res.body).toHaveProperty('IP');
    expect(res.body).toHaveProperty('URL', route);
  });
});
