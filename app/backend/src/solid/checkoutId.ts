import { Op } from 'sequelize';
import Team from '../database/models/TeamModel';

const checkouId = async (arg1: number, arg2: number) => {
  const findHomeTemAwayTeam = await Team.findAll({
    where: { [Op.or]: [{ id: arg1 }, { id: arg2 }] },
  });

  return findHomeTemAwayTeam;
};

export default checkouId;
