// const Trade = require('./Trade');
const Car = require('./car');
const User = require('./User');
const Sale = require('./sale');

// Users without a car or inventory (just a username and password)
User.hasNone(Car, {
    foreignKey: 'user_id',
});

// All the cars a user has (Inventory of all cars a user has)
User.hasMany(Car, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Car belongs to User, as a seller (Inventory of cars for sale)
Car.belongsTo(User, {
    foreignKey: 'seller_id',
    onDelete: 'SET NULL'
});

// Car belongs to User, as a buyer (Once a car is sold, the buyer is stored here)
Car.belongsTo(User, {
    foreignKey: 'buyer_id',
    onDelete: 'SET NULL'
});

// Car has one Sale (A car can only be sold once)
Car.hasOne(Sale, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
});

// Sale belongs to Car (A sale can only be for one car)
Sale.belongsTo(Car, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
});

// Sale belongs to User (A sale can only be for one user)
Sale.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User has many Sales (A user can have many sales)
User.hasMany(Sale, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Car, Sale };





