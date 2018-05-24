var request = require('supertest');
var base_url = 'http://localhost:3000/';

describe("/users", function () {
  describe("GET /", function () {
    it("returns OK, ", function () {
      request(base_url)
      .get('/users')
      .expect(200);
    })
  });
});