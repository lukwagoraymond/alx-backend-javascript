export default function cleanSet(set, startString) {
  let finalStr = '';
  const stringArr = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      stringArr.push(element.slice(startString.length));
    }
  }

  finalStr = stringArr.join('-');
  return finalStr;
}
