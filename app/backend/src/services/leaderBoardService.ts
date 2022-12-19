import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import calcLeaderBoard from '../solid/calcLeaderBoard';

class LeaderBoardServices {
  private _responseHome!: Team[];
  private _responseAway!: Team[];

  public leaderBoardTest = () => {};
  public leaderBoardHome = async () => {
    this._responseHome = await Team.findAll({
      include: { model: Match, as: 'teamHome', where: { inProgress: false } },
    });
    // return this._responseHome;

    this._responseAway = await Team.findAll({
      include: { model: Match, as: 'teamAway', where: { inProgress: false } },
    });
    // return this._responseAway;
    // fixing it
    return calcLeaderBoard(this._responseHome, this._responseAway).sort((a, b) => {
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
    });
  };
}

export default LeaderBoardServices;
