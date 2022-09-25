const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Survey extends Model { }

Survey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created:{
      type:DataTypes.DATE,
      allowNull:false,
      defaultValue: DataTypes.NOW,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    option1: {
      type: DataTypes.STRING,
    },
    option2: {
      type: DataTypes.STRING,
    },
    option3: {
      type: DataTypes.STRING,
    },
    option4: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'survey',
  }
);

module.exports = Survey;
