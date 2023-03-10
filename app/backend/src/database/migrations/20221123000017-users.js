/* 
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users',{ id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     },
     userName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'username',
     },
     role: {
      type: Sequelize.STRING,
      allowNull: false,
     },
     email: {
      type: Sequelize.STRING,
      allowNull: false
     },
     password: {
      type: Sequelize.STRING,
      allowNull: false
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
    await queryInterface.dropTable('users');
  }
};
