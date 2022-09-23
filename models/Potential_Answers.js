const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Potential_Answers extends Model { }

Potential_Answers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'question',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'potential_answers',
    }
);

module.exports = Potential_Answers;
