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

User.belongsToMany(Blog, {
  through: {
    model: Comment,
    unique: false
  },
  as: 'user_comments'
});

Blog.belongsToMany(User, {
  through: {
    model: Comment,
    unique: false
  },
  as: 'blog_user'
});

module.exports = { User, Blog, Comment };
