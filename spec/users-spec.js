var app = require('../app.js');

var request = require('supertest');
var base_url = 'http://localhost:3000/';

describe("/users", function () {
  describe("GET /", function () {
    it("returns OK, ", function () {
      request(app)
      .get('/users')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });      
    })
  });
});