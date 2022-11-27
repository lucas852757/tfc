/* 
source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/cf69bd1a-0095-44f0-be02-7cd9ddad0ac2 */

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('matches', { id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeam: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'home_team',
      references: {
        model: 'teams',
        key: 'id',
      }
    },
    homeTeamGoals: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'home_team_goals',
    },
    awayTeam: {
      type: Sequelize.INTEGER,
      allowNull:false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'away_team',
      references: {
        model: 'teams',
        key: 'id',
      }
    },
    awayTeamGoals: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'away_team_goals',
    },
    inProgress: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'in_progress',
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
     await queryInterface.dropTable('matches');
  }
};
