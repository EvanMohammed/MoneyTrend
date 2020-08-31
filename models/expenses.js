const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Expenses.init({
    expenseName: DataTypes.STRING,
    total: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Expenses',
  });
  Expenses.associate = function (models) {
    Expenses.belongsTo(models.ExpenseCategories, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Expenses;
};
