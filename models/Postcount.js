const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Postcount extends Model {}

Postcount.init(
    {
        forum_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'forum',
                key: 'id',
            },
        },
        comments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'postcount',
    }
);

module.exports = Forum;