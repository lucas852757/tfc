const teamsNotEqual = (arg1: number, arg2: number) => {
  if (arg1 === arg2) {
    const error = new Error('It is not possible to create a match with two equal teams');
    error.name = 'twoEqualsTeamsError';
    throw error;
  }
};
export default teamsNotEqual;
