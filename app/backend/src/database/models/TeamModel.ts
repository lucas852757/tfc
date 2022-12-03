import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import { Model } from 'sequelize';

class Team extends Model {
  id!: number;
  teamName!: string;
  teamHome!: void;
}

Team.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'Team',
  tableName: 'teams',
});

export default Team;
