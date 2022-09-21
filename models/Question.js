const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model { }

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    survey_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'survey',
        key: 'id',
      },
    },
    question_body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    response:{
        type: DataTypes.STRING(500), 
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
  }
);

module.exports = Question;
