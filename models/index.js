
<<<<<<< HEAD
const Car = require('./car');
const User = require('./User');
const Auction = require('./auction');

// Users without a car or inventory (just a username and password)
<<<<<<< HEAD
//////// Is there function for hasNone?? if yes, why did we set this up? 
// User.hasNone(Car, {
//     foreignKey: 'user_id',
// });

// All the cars a user has (Inventory of all cars a user has)
=======
// const Car = require('./car');
// const User = require('./User');
// const Auction = require('./auction');

// // Users without a car or inventory (just a username and password)

// User.hasOne(Car, {
//     foreignKey: 'user_id',
// });

// // All the cars a user has (Inventory of all cars a user has)
>>>>>>> c42fa4687798195e7d901dda79d59d76f26ea8f0
// User.hasMany(Car, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// // Car belongs to User, as a seller (Inventory of cars for sale)
// Car.belongsTo(User, {
//     foreignKey: 'seller_id',
//     onDelete: 'SET NULL'
// });

// // Car belongs to User, as a buyer (Once a car is sold, the buyer is stored here)
// Car.belongsTo(User, {
//     foreignKey: 'buyer_id',
//     onDelete: 'SET NULL'
// });

<<<<<<< HEAD
// // Car has one Sale (A car can only be sold once)
// Car.hasOne(Sale, {
//     foreignKey: 'car_id',
//     onDelete: 'CASCADE'
// });

// // Sale belongs to Car (A sale can only be for one car)
// Auction.belongsTo(Car, {
//     foreignKey: 'car_id',
//     onDelete: 'CASCADE'
// });

=======
>>>>>>> c42fa4687798195e7d901dda79d59d76f26ea8f0
// // Sale belongs to User (A sale can only be for one user)
// Auction.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// // User has many Sales (A user can have many sales)
// User.hasMany(Auction, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });
<<<<<<< HEAD
=======

User.hasOne(Car, {
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

// Sale belongs to User (A sale can only be for one user)
Auction.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User has many Sales (A user can have many sales)
User.hasMany(Auction, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
>>>>>>> 79a0723c4005ad65b20439f0b358a2ee89a91285

module.exports = { User, Car, Auction };
=======

// module.exports = { User, Car, Auction };
>>>>>>> c42fa4687798195e7d901dda79d59d76f26ea8f0





