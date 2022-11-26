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
      autoIncrement: false,
    },
    homeTeam: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'home_team',
    },
    homeTeamGoals: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'home_team_goals',
    },
    awayTeam: {
      type: Sequelize.INTEGER,
      allowNull:false,
      field: 'away_team',
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
  }
};
