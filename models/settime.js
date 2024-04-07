'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SetTime.init({
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    eventId: DataTypes.INTEGER,
    stageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SetTime',
  });
  return SetTime;
};