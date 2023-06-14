const fs = require('fs');

const countStudents = (fileName) => {
  const promise = (resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let csStudents = [];
        const fields = [];
        let message;
        const returnMsgs = [];
        const strData = data.toString().trim();
        const dataObj = strData.split('\n');
        const listCreate = (val) => val.trim().split(',');
        const modObj = dataObj.map(listCreate);
        message = `Number of students: ${modObj.length - 1}`;
        returnMsgs.push(message);
        console.log(message);
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
            message = `Number of students in ${uniqueFields[x]}: ${csStudents.length}. List: ${csStudents.join(', ')}`;
            returnMsgs.push(message);
            console.log(message);
            csStudents = [];
          }
        }
        resolve(returnMsgs);
      }
    });
  };
  return new Promise(promise);
};

module.exports = countStudents;
