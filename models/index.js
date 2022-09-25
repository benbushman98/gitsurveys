const User = require('./User');
const Survey = require('./Survey');

User.hasMany(Survey, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Survey.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Survey };