const fs = require('fs');

const countStudents = (fileName) => {
  let csStudents = [];
  const fields = [];
  try {
    const data = fs.readFileSync(fileName);
    const strData = data.toString().trim();
    const dataObj = strData.split('\n');
    const listCreate = (val) => val.trim().split(',');
    const modObj = dataObj.map(listCreate);
    console.log(`Number of students: ${modObj.length - 1}`);
    for (let i = 0; i < modObj.length; i += 1) {
      fields.push(modObj[i][3]);
    }
    fields.shift();
    const uniqueFields = [...new Set(fields)];
    for (const x in uniqueFields) {
      if (Object.prototype.hasOwnProperty.call(uniqueFields, x)) {
        for (let i = 0; i < modObj.length; i += 1) {
          if (modObj[i].includes(uniqueFields[x])) {
            csStudents.push(modObj[i][0]);
          }
        }
        console.log(`Number of students in ${uniqueFields[x]}: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        csStudents = [];
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
