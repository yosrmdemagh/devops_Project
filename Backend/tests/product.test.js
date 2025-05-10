// backend/tests/product.test.js
const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/api/test', (req, res) => res.status(200).json({ message: 'ok' }));

describe('API test route', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('ok');
  });
});
