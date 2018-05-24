var request = require('supertest');
var base_url = 'http://localhost:3000/';

describe("/", function () {
  describe("GET /", function () {
    it("returns OK, ", function () {
      request(base_url)
      .get('/')
      .expect(200);
    })
  })
});
