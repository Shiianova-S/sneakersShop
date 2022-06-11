const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate() {
    }
  }
  Comment.init({
    authorName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    photo: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
