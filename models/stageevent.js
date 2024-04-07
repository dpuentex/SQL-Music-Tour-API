"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StageEvent.init(
    {
      stageId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      eventId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "StageEvent",
      tableName: "StageEvents",
      timestamps: false,
    }
  );
  return StageEvent;
};
