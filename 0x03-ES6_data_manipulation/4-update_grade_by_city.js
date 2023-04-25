/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(Arr, city, newGrade) {
  if (!Array.isArray(Arr) || !Array.isArray(newGrade)) {
    return [];
  }

  return Arr
    .filter((student) => student.location === city)
    .map((student) => {
      student.grade = 'N/A';
      for (const idx of newGrade) {
        if (student.id === idx.studentId) {
          student.grade = idx.grade;
        }
      }
      return student;
    });
}
