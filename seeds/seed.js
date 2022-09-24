const sequelize = require('../config/connection');
const { User, Survey, Question } = require('../models');

const userData = require('./userData.json');
const surveyData = require('./surveyData.json');
// const questionData = require('./questionData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const survey of surveyData) {
    await Survey.create({
      ...survey
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  // for (const question of questionData) {
  //   await Question.create({    
  //     ...question
  //   });
  // }

  
  
  process.exit(0);
};

seedDatabase();

//  for survey data; Do we need to include a key for "user_id" and a value?
// Do we need to include a value for "date_created"?
