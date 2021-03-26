const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Define relationships
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
  through: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };
