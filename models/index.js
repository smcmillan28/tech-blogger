const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Define blog/user relationships
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// User/comment relationships
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// Comment/blog relationships
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Blog, Comment };
