const User = require('./User');
const Survey = require('./Survey');
const Question = require('./Question');

User.hasMany(Survey, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Survey.belongsTo(User, {
  foreignKey: 'user_id',
});

Survey.hasOne(Question, {
  foreignKey: 'survey_id',
})

Question.belongsTo(Survey, {
  foreignKey: 'survey_id',
})
module.exports = { User, Survey, Question };
