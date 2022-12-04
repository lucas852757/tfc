/* source:https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/cf69bd1a-0095-44f0-be02-7cd9ddad0ac2 */

import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
import totalPoints from '../solidHelpers.ts/totalPoints';
import totalGames from '../solidHelpers.ts/totalGames';
import totalVictories from '../solidHelpers.ts/totalVictories';
import totalDraws from '../solidHelpers.ts/totalDraws';
import totalLosses from '../solidHelpers.ts/totalLosses';
import totalGoalsFavor from '../solidHelpers.ts/totalGoalsFavor';
import totalGoalsOwn from '../solidHelpers.ts/totalGoalsOwn';
import efficiency from '../solidHelpers.ts/efficiency';
import sortArray from '../solid/sortArray';
import Rank from '../interfaces/RankInterface';

class LeaderBoardHomeService {
  private _response!: Team[];

  public leaderBoardHome = async () => {
    this._response = await Team.findAll({
      include: { model: Match, as: 'teamHome', where: { inProgress: false } },
    });

    this._response.map((o) => ({
      name: o.teamName,
      totalPoints: totalPoints(o.teamHome as unknown as Match[]),
      totalGames: totalGames(o.teamHome as unknown as Match[]),
      totalVictories: totalVictories(o.teamHome as unknown as Match[]),
      totalDraws: totalDraws(o.teamHome as unknown as Match[]),
      totalLosses: totalLosses(o.teamHome as unknown as Match[]),
      goalsFavor: totalGoalsFavor(o.teamHome as unknown as Match[]),
      goalsOwn: totalGoalsOwn(o.teamHome as unknown as Match[]),
      goalsBalence:
          totalGoalsFavor(o.teamHome as unknown as Match[])
          - totalGoalsOwn(o.teamHome as unknown as Match[]),
      efficiency: efficiency(o.id, o.teamHome as unknown as Match[]),
    }));
    return sortArray(this._response as unknown as Rank[]);
  };
}

export default LeaderBoardHomeService;
