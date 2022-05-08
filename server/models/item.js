'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.brand)
      item.belongsTo(models.user)
    }
  }
  item.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNulll: false,
      type: DataTypes.INTEGER
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: DataTypes.STRING,
    brandId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeCreate: function(item, option) {
        item.image = "https://via.placeholder.com/100"
      }
    },
    sequelize,
    modelName: 'item',
  });
  return item;
};