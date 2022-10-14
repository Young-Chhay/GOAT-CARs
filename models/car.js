// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Car extends Model {}

// Car.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     year: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     make: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     model: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     value: {
//         type: DataTypes.INTEGER, 
//         allowNull: false,
//     }, 
//     trade: {
//         type: DataTypes.BOOLEAN, 
//         allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'car',
//   }
// );

// module.exports = Car;