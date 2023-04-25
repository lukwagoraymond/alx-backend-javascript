export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer);

  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  dataview.setInt8(position, value);

  return dataview;
}
