'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Incomes', [{
      incomeSource: 'side hustle',
      total: 100,
      UserId: 1,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      incomeSource: 'sold items',
      total: 200,
      UserId: 2,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }, {
      incomeSource: 'job',
      total: 300,
      UserId: 3,
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
  },
};
