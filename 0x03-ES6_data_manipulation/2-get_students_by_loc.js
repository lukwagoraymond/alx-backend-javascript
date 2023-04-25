export default function getStudentsByLocation(Arr, city) {
  const locations = Arr.filter((loc) => loc.location === city);
  return locations;
}
