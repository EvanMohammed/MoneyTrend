'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Expenses', [{
      expenseName: 'road trip',
      total: 100,
      expenseCategoryId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'walmart',
      total: 200,
      expenseCategoryId: 2,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'house payment',
      total: 300,
      expenseCategoryId: 3,
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
  }
};
