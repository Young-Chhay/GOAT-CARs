const { Model, DataTypes } = require('sequelize');
// connection.js to connect Node to MySQL
const sequelize = require('../config/connection.js');

class Car extends Model { }

Car.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // value: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // NOt using trade
        // trade: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: false,
        // },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'car',
    }
);

module.exports = Car;