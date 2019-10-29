import axios from 'axios';

// const getCows = () => axios.get('https://teamtreehouse.com/ashleyclaiborne.json');

const getCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/cows.json').then((response) => {
    const demCows = response.data.cows;
    const cows = [];
    Object.keys(demCows).forEach((cowId) => {
      // demCows['cow3']
      demCows[cowId].id = cowId;
      cows.push(demCows[cowId]);
    });
    resolve(cows);
  }).catch((error) => reject(error));
});

export default { getCows };
