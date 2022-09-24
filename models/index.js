const User = require('./User');
const Survey = require('./Survey');
// const Question = require('./Question');
// const User_Response = require('./User_Response')
// const Potential_Answers = require('./Potential_Answers')

User.hasMany(Survey, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Survey.belongsTo(User, {
  foreignKey: 'user_id',
});

// Survey.hasMany(Question, {
//   foreignKey: 'survey_id',
// })

// Question.belongsTo(Survey, {
//   foreignKey: 'survey_id',
// })

// Question.hasOne(User_Response, {
//   foreignKey: 'question_id',
// })

// User_Response.belongsTo(Question, {
//   foreignKey: 'question_id',
// })

// Question.hasMany(Potential_Answers, {
//   foreignKey: 'question_id'
// })

// Potential_Answers.belongsTo(Question, {
//   foreignKey: 'question_id'
// })


module.exports = { User, Survey };
// { User, Survey, Question };
