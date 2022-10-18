const User = require('./User')
const Forum = require('./Forum');

// // Users without a car or inventory (just a username and password)
const Car = require('./car');
const Auction = require('./auction');
const Bid = require('./bid');

User.hasMany(Forum, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Forum.belongsTo(User, {
    foreignKey: 'user_id'
});

// All the cars a user has (Inventory of all cars a user has)
User.hasMany(Car, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Car belongs to User, as a seller (Inventory of cars for sale)
Car.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Auction, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// Sale belongs to User (A sale can only be for one user)
Auction.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Bid, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Bid.belongsTo(User, {
    foreignKey: 'user_id',
});

Auction.hasMany(Bid, {
    foreignKey: 'auction_id',
    onDelete: 'CASCADE'
});

Bid.belongsTo(Auction, {
    foreignKey: 'auction_id',
});

Car.hasOne(Auction, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
})

Auction.belongsTo(Car, {
    foreignKey: 'car_id',
});

module.exports = { User, Car, Auction, Bid };




