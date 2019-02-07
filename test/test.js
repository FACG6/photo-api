/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
const test = require('tape');
const supertest = require('supertest');
const router = require('../src/router');
test('check status code is 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.headers['content-type'], 'text/html', 'response should contain homePage');
      t.end();
    });
});
test('check status code is 404', (t) => {
  supertest(router)
    .get('/elephants')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, '<h1>Page Not Found </h1>', 'response should contain page not found');
      t.end();
    });
});
test('check status code is 200', (t) => {
  supertest(router)
    .post('/search')
    .send('cat')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.equal(JSON.parse(res.body).data[0].images.fixed_height_still.url, 'https://media0.giphy.com/media/JIX9t2j0ZTN9S/200_s.gif', 'response should contain homePage');
      t.end();
    });
});
