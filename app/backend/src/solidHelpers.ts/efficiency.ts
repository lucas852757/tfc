import Match from '../database/models/MatchModel';
import totalGames from './totalGames';
import totalPoints from './totalPoints';

// This function calculate the efficiency of each team
const efficiency = (i: number, list: Match[]) => {
  const totalEfficiency = (totalPoints(list) / (totalGames(list) * 3)) * 100;
  return totalEfficiency.toFixed(2);
};

export default efficiency;
