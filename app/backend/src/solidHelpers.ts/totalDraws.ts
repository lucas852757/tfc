import Match from '../database/models/MatchModel';

// This function calculate the number of draws of each team
const totalDraws = (list: Match[]) => {
  let draws = 0;

  for (let count = 0; count < list.length; count += 1) {
    if (
      list[count].homeTeamGoals
      === list[count].awayTeamGoals
    ) {
      draws += 1;
    }
  }
  return draws;
};

export default totalDraws;
