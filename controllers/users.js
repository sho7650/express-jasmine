var model = require('../models');

exports.find = (id) => {
  console.log(id);
  return model.user.findAll();
}

exports.add = (a, b) => {
  return a + b;
}