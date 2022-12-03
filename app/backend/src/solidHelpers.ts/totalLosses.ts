import Match from '../database/models/MatchModel';

// This function calculate the number of losses of each team
const totalLosses = (list: Match[]) => {
  let losses = 0;

  for (let count = 0; count < list.length; count += 1) {
    if (list[count].homeTeamGoals < list[count].awayTeamGoals) {
      losses += 1;
    }
  }
  return losses;
};

export default totalLosses;
