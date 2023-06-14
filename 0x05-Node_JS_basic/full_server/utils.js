import { readFile } from 'fs';

const readDatabase = (fileName) => {
  const promise = (resolve, reject) => {
    readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const strData = data.toString().trim();
        const dataObj = strData.split('\n');
        const listCreate = (val) => val.trim().split(',');
        const modData = dataObj.map(listCreate);
        const modKeys = modData.shift();
        const result = [];
        const dataSet = new Set();
        const res = {};

        for (let i = 0; i < modData.length; i += 1) {
          const dataJson = {};
          for (let j = 0; j < modData[i].length; j += 1) {
            if (modData[i][j] !== '') {
              dataJson[modKeys[j]] = modData[i][j];
              if (modKeys[j] === 'field') {
                dataSet.add(modData[i][j]);
              }
            }
          }
          result.push(dataJson);
        }
        const finalResult = result.filter((item) => Object.keys(item).length !== 0);
        dataSet.forEach((value) => {
          const arr = finalResult.filter((item) => item.field === value);
          const firstName = arr.map((item) => item.firstname);
          res[value] = firstName;
        });
        resolve(res);
      }
    });
  };
  return new Promise(promise);
};

export default readDatabase;
