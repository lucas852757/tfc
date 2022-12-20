import Team from '../database/models/TeamModel';
import calcLeaderBoardAway from './calcLeaderBoardAway';
import calcLeaderBoardHome from './calcLeaderBoardHome';
import generalLeaderBoard from './generalLeaderBoard';

const calcLeaderBoard = (arg0: Team[], arg1: Team[]) => {
  const leaderboardHome = calcLeaderBoardHome(arg0);
  const leaderboardAway = calcLeaderBoardAway(arg1);

  return generalLeaderBoard(leaderboardHome, leaderboardAway);
};

export default calcLeaderBoard;
