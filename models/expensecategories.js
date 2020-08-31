const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ExpenseCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  ExpenseCategories.init({
    categoryName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ExpenseCategories',
  });
  ExpenseCategories.associate = function (models) {
    ExpenseCategories.hasMany(models.Expenses);
  };
  return ExpenseCategories;
};
