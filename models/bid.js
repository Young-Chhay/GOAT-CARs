// create a sequelize model for our table for bidding
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Bid extends Model { }

Bid.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        auction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'auction',
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
        // *** use this as the highest bid 
        bid_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bid_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'bid'
    }
);

module.exports = Bid;

