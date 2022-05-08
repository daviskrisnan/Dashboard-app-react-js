'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      brand.hasMany(models.item)
    }
  }
  brand.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(brand, option) {
        brand.image = "https://via.placeholder.com/100"
      }
    },
    sequelize,
    modelName: 'brand',
  });
  return brand;
};