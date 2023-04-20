import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
const test = handleResponseFromAPI(promise);
console.log(test);
