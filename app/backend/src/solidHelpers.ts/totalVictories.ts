import Match from '../database/models/MatchModel';

// This function calc the number of victories of each team
const victories = (list: Match[]) => {
  let totalVictories = 0;

  for (let count = 0; count < list.length; count += 1) {
    if (
      list[count].homeTeamGoals
      > list[count].awayTeamGoals
    ) {
      totalVictories += 1;
    }
  }
  return totalVictories;
};

export default victories;
