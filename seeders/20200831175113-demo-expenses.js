'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Expenses', [{
      expenseName: 'road trip',
      total: 100,
      expenseCategoryId: 2,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'walmart-groceries',
      total: 300,
      expenseCategoryId: 3,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'electric',
      total: 200,
      expenseCategoryId: 4,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'health-ins',
      total: 400,
      expenseCategoryId: 6,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'savings-september',
      total: 500,
      expenseCategoryId: 5,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'walmart-party',
      total: 200,
      expenseCategoryId: 7,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      expenseName: 'mortgage',
      total: 2000,
      expenseCategoryId: 1,
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
