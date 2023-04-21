import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const classArr = [];
  for (const idx of sizes) {
    classArr.push(new ClassRoom(idx));
  }
  return classArr;
}
