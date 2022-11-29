// This function helps in the filtering of teams with the status inProgress true or false.

import Match from '../database/models/MatchModel';

const filterTrueOrFalse = (arg1: string, arg2: Array<Match>) => {
  if (arg1 === 'true') {
    return arg2.filter((object) => object.inProgress === true);
  }

  if (arg1 === 'false') {
    return arg2.filter((object) => object.inProgress === false);
  }
};

export default filterTrueOrFalse;
