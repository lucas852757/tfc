import leaderboardInterface from '../interfaces/leaderBoardInterface';
// import calcLeaderBoardHome from './calcLeaderBoardHome';

// eslint-disable-next-line max-lines-per-function
const generalLeaderBoard = (arg0: leaderboardInterface[], arg1: leaderboardInterface[]) => {
  const leaderboard: leaderboardInterface[] = [];
  for (let i0 = 0; i0 <= arg0.length - 1; i0 += 1) {
    for (let i1 = 0; i1 <= arg1.length - 1; i1 += 1) {
      if (arg0[i0].name === arg1[i1].name) {
        leaderboard.push({ name: arg0[i0].name,
          totalPoints: (arg0[i0].totalPoints) + (arg1[i1].totalPoints),
          totalGames: (arg0[i0].totalGames) + (arg1[i1].totalGames),
          totalVictories: (arg0[i0].totalVictories) + (arg1[i1].totalVictories),
          totalDraws: (arg0[i0].totalDraws) + (arg1[i1].totalDraws),
          totalLosses: (arg0[i0].totalLosses) + (arg1[i1].totalLosses),
          goalsFavor: (arg0[i0].goalsFavor) + (arg1[i1].goalsFavor),
          goalsOwn: (arg0[i0].goalsOwn) + (arg1[i1].goalsOwn),
          goalsBalance: (arg0[i0].goalsBalance) + (arg1[i1].goalsBalance),
          efficiency: (((arg0[i0].totalPoints + arg1[i1].totalPoints)
          / ((arg0[i0].totalGames + arg1[i1].totalGames) * 3)) * 100).toFixed(2) });
      }
    }
  }
  return leaderboard;
};

export default generalLeaderBoard;
