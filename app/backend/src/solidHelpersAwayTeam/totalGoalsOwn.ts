import Match from '../database/models/MatchModel';

const goalsOwn = (list: Match[]) => {
  let totalGoalsOwn = 0;

  for (let count = 0; count < list.length; count += 1) {
    totalGoalsOwn += list[count].homeTeamGoals;
  }
  return totalGoalsOwn;
};

export default goalsOwn;
