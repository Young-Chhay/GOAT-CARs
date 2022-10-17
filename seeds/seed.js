const sequelize = require('../config/connection');
const { User, Auction, Merchandise, Car} = require('../models');
const Forum = require('../models/Forum');

const userData = require('./userData.json');
const carData = require('./carData.json');
const forumData = require('./forumData.json')

// const auctionData = require('./.json');
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

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }


  process.exit(0);
};

seedDatabase();