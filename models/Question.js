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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    question_body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    possible_answers:{
        type: DataTypes.TEXT, //I'm not sure if this is the best DATA type
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
