export default function getListStudentIds(Arr) {
  if (!Array.isArray(Arr)) {
    return [];
  }
  const map1 = Arr.map((keyz) => keyz.id);
  return map1;
}
