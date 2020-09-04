'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Incomes', [{
      incomeSource: 'Direct deposit',
      total: 3000,
      UserId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      incomeSource: 'eBay',
      total: 200,
      UserId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      incomeSource: 'Bonus',
      total: 20000,
      UserId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  },
};
