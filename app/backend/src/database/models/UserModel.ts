import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class User extends Model {
  // declare <campo>: <tipo>;
  id!: number;
  userName!: string;
  role!: string;
  email!: string;
  password!: string;
}

User.init({
  // ... Campos
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: {
    type: STRING,
    allowNull: false,
    field: 'username',
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  // underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'users',
});

export default User;
