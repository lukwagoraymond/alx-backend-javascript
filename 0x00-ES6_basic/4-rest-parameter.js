/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
export default function returnHowManyArguments(...args) {
  let sum = 0;
  for (let arg of args) sum += 1;
  return sum;
}
