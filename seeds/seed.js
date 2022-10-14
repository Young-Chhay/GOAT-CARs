const sequelize = require('../config/connection');
const { User, car, auction, merchandise } = require('../models');

const userData = require('./userData.json');
const carData = require('./carData.json');
const auctionData = require('./.json');
const merchData = require('./merchandiseData.jsonjson');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const car of carData) {
    await Car.create({
      ...car,
    });
  };
  for (const auction of auctionData) {
    await Auction.create({
      ...auction,
    });
  };
  for (const merchandise of merchData) {
    await Merchandise.create({
      ...merchandise,
    });
  };

  process.exit(0);
};

seedDatabase();