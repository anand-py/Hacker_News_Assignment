'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stories.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    author: DataTypes.STRING,
    points: DataTypes.INTEGER,
    hn_timestamp: DataTypes.INTEGER,
    status: DataTypes.ENUM('active', 'deleted')
  }, {
    sequelize,
    modelName: 'Stories',
  });
  return Stories;
};