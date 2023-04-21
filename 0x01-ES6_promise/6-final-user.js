import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);
  return Promise.allSettled([signUpPromise, uploadPromise]).then((val) => {
    const resultarr = [];
    val.forEach((element) => {
      if (element.status === 'fulfilled') {
        resultarr.push({ status: element.status, value: element.value });
      } else {
        resultarr.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return resultarr;
  });
}
