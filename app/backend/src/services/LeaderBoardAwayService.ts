import Match from "../database/models/MatchModel";
import Team from "../database/models/TeamModel";
import calcLeaderBoardAway from "../solid/calcLeaderBoardHome";

class LeaderBoardAwayServices {
  private _response!: Team[];

  public leaderBoard = async () => {
    this._response = await Team.findAll({
      include: { model: Match, as: "teamAway", where: { inProgress: false } },
    });

    /* return calcLeaderBoardAway(this._response).sort((a, b) => {
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
    return this._response;
  };
}

export default LeaderBoardAwayServices;
