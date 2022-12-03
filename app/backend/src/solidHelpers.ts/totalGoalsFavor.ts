import Match from '../database/models/MatchModel';

const goalsFavor = (list: Match[]) => {
  let totalGoalsFavor = 0;

  for (let count = 0; count < list.length; count += 1) {
    totalGoalsFavor += list[count].homeTeamGoals;
  }
  return totalGoalsFavor;
};

export default goalsFavor;
