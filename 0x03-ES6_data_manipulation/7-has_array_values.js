export default function hasValuesFromArray(set, Arr) {
  for (const idx of Arr) {
    if (!set.has(idx)) {
      return false;
    }
  }
  return true;
}
