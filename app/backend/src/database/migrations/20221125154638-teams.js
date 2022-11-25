'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('teams',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true,
      },
      teamName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'team_name',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('teams');
  }
};
