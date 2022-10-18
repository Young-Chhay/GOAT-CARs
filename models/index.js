const User = require('./User')
const Forum = require('./Forum');

User.hasMany(Forum, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Forum.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User};

