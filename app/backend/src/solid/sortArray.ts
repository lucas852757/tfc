import Rank from '../interfaces/RankInterface';

const sortArray = (list: Rank[]) => {
  list.sort((a, b) => {
    if (a.totalPoints === b.totalPoints) {
      if (a.goalsBalence === b.goalsBalence) {
        if (a.goalsFavor === b.goalsFavor) {
          return a.goalsOwn - b.goalsOwn;
        }
        return b.goalsFavor - a.goalsFavor;
      }
      return b.goalsBalence - a.goalsBalence;
    }
    return b.totalPoints - a.totalPoints;
  });
};

export default sortArray;
