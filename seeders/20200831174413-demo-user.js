'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('Users', [
    //   {
    //   email: 'nicci@gmail.com',
    //   password: '$2a$10$Wa10be9z2enW9NOm1wP8me4k8cjCp2i3vDMfzMaRlJc.EC58v9dMS',
    //   createdAt: '2020-01-01 10:10:10',
    //   updatedAt: '2020-01-01 10:10:10',
    // }, {
    //   email: 'troy@gmail.com',
    //   password: '$2a$10$Wa10be9z2enW9NOm1wP8me4k8cjCp2i3vDMfzMaRlJc.EC58v9dMS',
    //   createdAt: '2020-01-01 10:10:10',
    //   updatedAt: '2020-01-01 10:10:10',
    // }, {
    //   email: 'evan@gmail.com',
    //   password: '$2a$10$Wa10be9z2enW9NOm1wP8me4k8cjCp2i3vDMfzMaRlJc.EC58v9dMS',
    //   createdAt: '2020-01-01 10:10:10',
    //   updatedAt: '2020-01-01 10:10:10',
    // }], {});
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