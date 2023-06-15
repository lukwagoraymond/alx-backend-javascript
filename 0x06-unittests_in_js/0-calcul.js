const calculateNumber = (a, b) => {
  if (isNaN(a) || isNaN(b) == true) {
    const sum = Math.round(Number.isInteger(a)) + Math.round(Number.isInteger(b));
    return sum;
  } else {
    const sum = Math.round(a) + Math.round(b);
    return sum;
  }
}

module.exports = calculateNumber;
