import Match from '../database/models/MatchModel';
import efficiency from '../solidHelpersAwayTeam/efficiency';
import totalDraws from '../solidHelpers.ts/totalDraws';
import totalGames from '../solidHelpersAwayTeam/totalGames';
import totalGoalsFavor from '../solidHelpersAwayTeam/totalGoalsFavor';
import totalGoalsOwn from '../solidHelpersAwayTeam/totalGoalsOwn';
import totalLosses from '../solidHelpersAwayTeam/totalLosses';
import totalPoints from '../solidHelpersAwayTeam/totalPoints';
import totalVictories from '../solidHelpersAwayTeam/totalVictories';
import Team from '../database/models/TeamModel';
// import Rank from '../interfaces/RankInterface';

const calcLeaderBoardHome = (list: Team[]) =>
  list.map((o) => ({
    name: o.teamName,
    totalPoints: totalPoints(o.teamAway as unknown as Match[]),
    totalGames: totalGames(o.teamAway as unknown as Match[]),
    totalVictories: totalVictories(o.teamAway as unknown as Match[]),
    totalDraws: totalDraws(o.teamAway as unknown as Match[]),
    totalLosses: totalLosses(o.teamAway as unknown as Match[]),
    goalsFavor: totalGoalsFavor(o.teamAway as unknown as Match[]),
    goalsOwn: totalGoalsOwn(o.teamAway as unknown as Match[]),
    goalsBalance:
    totalGoalsFavor(o.teamAway as unknown as Match[])
    - totalGoalsOwn(o.teamAway as unknown as Match[]),
    efficiency: efficiency(o.id, o.teamAway as unknown as Match[]),
  }));

export default calcLeaderBoardHome;
