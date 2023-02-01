'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId = await queryInterface.rawSelect('Dealers', {
      where: {
        name: 'Raditya'
      }
    }, ['id'])

    await queryInterface.bulkInsert('Products', [
      {
        name: 'Coci-Colu',
        stock: 10,
        DealerId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pepsu',
        stock: 70,
        DealerId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
