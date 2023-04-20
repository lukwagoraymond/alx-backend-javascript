export default function appendToEachArrayValue(array, appendString) {
  const arrfinal = [];
  for (const val of array) {
    arrfinal.push(appendString + val);
  }
  return arrfinal;
}
