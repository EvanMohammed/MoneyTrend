const { now } = require("sequelize/types/lib/utils");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ExpenseCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryName: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ExpenseCategories');
  },
};
