const sequelize = require('../config/connection');

const { auction } = require('../models');
const Merchandise = require('../models/Merchandise')
const User = require('../models/User');
const Forum = require('../models/Forum');
const Car = require('../models/Car')

const userData = require('./userData.json');
const carData = require('./carData.json');
const forumData = require('./forumData.json')

// const merchData = require('./.json');
const merchData = require('./merchandiseData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const forums = await Forum.bulkCreate(forumData, {
    individualHooks: true,
    returning: true,
  });

  const merchandise = await Merchandise.bulkCreate(merchData, {
    individualHooks: true,
    returning: true,
  });

  const car = await Car.bulkCreate(carData, {
    individualHooks: true,
    returning: true,
  });


  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }


  process.exit(0);
};

seedDatabase();