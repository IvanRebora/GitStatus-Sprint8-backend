'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey:"categories_id"
      });
      Product.belongsTo(models.Brand, {
        foreignKey:"brands_id"
      });
      Product.hasMany(models.Image, {
        as: "images",
        foreignKey: "products_id"
    });
      Product.hasOne(models.Order_detail,{
        as:"order_details",
        foreignKey: "products_id"
      });
      }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    brands_id: DataTypes.INTEGER,
    categories_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};