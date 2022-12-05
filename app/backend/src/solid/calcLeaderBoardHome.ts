import Match from '../database/models/MatchModel';
import efficiency from '../solidHelpers.ts/efficiency';
import totalDraws from '../solidHelpers.ts/totalDraws';
import totalGames from '../solidHelpers.ts/totalGames';
import totalGoalsFavor from '../solidHelpers.ts/totalGoalsFavor';
import totalGoalsOwn from '../solidHelpers.ts/totalGoalsOwn';
import totalLosses from '../solidHelpers.ts/totalLosses';
import totalPoints from '../solidHelpers.ts/totalPoints';
import totalVictories from '../solidHelpers.ts/totalVictories';
import Team from '../database/models/TeamModel';
// import Rank from '../interfaces/RankInterface';

const calcLeaderBoardHome = (list: Team[]) => {
   return list.map((o) => ({
    name: o.teamName,
    totalPoints: totalPoints(o.teamHome as unknown as Match[]),
    totalGames: totalGames(o.teamHome as unknown as Match[]),
    totalVictories: totalVictories(o.teamHome as unknown as Match[]),
    totalDraws: totalDraws(o.teamHome as unknown as Match[]),
    totalLosses: totalLosses(o.teamHome as unknown as Match[]),
    goalsFavor: totalGoalsFavor(o.teamHome as unknown as Match[]),
    goalsOwn: totalGoalsOwn(o.teamHome as unknown as Match[]),
    goalsBalance:
        totalGoalsFavor(o.teamHome as unknown as Match[])
        - totalGoalsOwn(o.teamHome as unknown as Match[]),
    efficiency: efficiency(o.id, o.teamHome as unknown as Match[]),
  }));
 /*  return list.sort((a, b) => {
    if (a.totalPoints === b.totalPoints) {
      if (a.goalsBalance === b.goalsBalance) {
        if (a.goalsFavor === b.goalsFavor) {
          return a.goalsOwn - b.goalsOwn;
        }
        return b.goalsFavor - a.goalsFavor;
      }
      return b.goalsBalance - a.goalsBalance;
    }
    return b.totalPoints - a.totalPoints;
  }); */
  // console.log(list);
};

export default calcLeaderBoardHome;
