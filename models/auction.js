const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Auction extends Model { }

Auction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        car_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'car',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        sale_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'auction'
    }
);

module.exports = Auction;
