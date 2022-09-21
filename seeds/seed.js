const sequelize = require('../config/connection');
const { User, Survey, Question } = require('../models');

const userData = require('./userData.json');
const surveyData = require('./surveyData.json');
const questionData = require('./questionData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const survey of surveyData) {
    await Survey.create({
      ...survey,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  //We still need to work with the questionData and revise the .json files in this folder
  
  process.exit(0);
};

seedDatabase();
