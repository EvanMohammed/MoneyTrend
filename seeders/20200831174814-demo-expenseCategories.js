'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ExpenseCategories', [{
      categoryName: 'Housing',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      categoryName: 'Transportation',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      categoryName: 'Consumables',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      categoryName: 'Utilities',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      categoryName: 'Savings',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      categoryName: 'Medical',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      categoryName: 'Recreation',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      categoryName: 'Miscellaneous',
      userId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
