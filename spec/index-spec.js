var request = require('request');
var base_url = 'http://localhost:3000/';

describe("/", function () {
  describe("GET /", function () {
    it("returns OK, ", function () {
      request.get(base_url, function (err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      })
    })
  });
});