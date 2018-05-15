'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};