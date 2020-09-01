const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Income.init({
    incomeSource: DataTypes.STRING,
    total: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Incomes',
  });
  return Income;
};
