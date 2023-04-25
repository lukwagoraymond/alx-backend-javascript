const getStudentIdsSum = (Arr) => {
  const sum = Arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
  return sum;
};

export default getStudentIdsSum;
