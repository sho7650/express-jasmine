var request = require('request');
var users_url = 'http://localhost:3000/users/';

describe("/users", function () {
  describe("GET /", function () {
    it("returns OK, ", function () {
      request.get(users_url, function (err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      })
    })
  });
});