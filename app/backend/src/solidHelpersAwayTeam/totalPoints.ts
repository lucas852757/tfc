import Match from '../database/models/MatchModel';

// total of points
// this functinon calc the total points of a winner based on some rules
const totalPoints = (list: Match[]) => {
  let homeTeamGoalsPoints = 0;
  let awayTeamGoalsPoints = 0;

  // const lengthList = listOfFiltereds.length;
  /**
  /**
   * source: https://stackoverflow.com/questions/54884488/how-can-i-solve-the-error-ts2532-object-is-possibly-undefined
   */
  // non-null assertion operator (!)
  for (let count = 0; count < list.length; count += 1) {
    if (list[count].homeTeamGoals > list[count].awayTeamGoals
    ) {
      // homeTeamGoalsPoints += 3;
      awayTeamGoalsPoints += 0;
    } else if (list[count].homeTeamGoals < list[count].awayTeamGoals
    ) {
      // homeTeamGoalsPoints += 0;
      awayTeamGoalsPoints += 3;
    } else {
      // homeTeamGoalsPoints += 1;
      awayTeamGoalsPoints += 1;
    }
  }

  return awayTeamGoalsPoints;
};

export default totalPoints;
