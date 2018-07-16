var app = require('../app.js');

var request = require('supertest');
var base_url = 'http://localhost:3000/';

describe("/", function () {
  describe("GET /", function () {
    it("returns OK, ", function () {
      request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });      
    })
  })
  describe("GET 404", function() {
    it("returns OK", function() {
      request(app)
      .get('/404')
      .expect(404)
      .end(function(err, res) {
        if (err) throw err;
      });      
    })
  })
});
