import cowData from '../../helpers/data/cows';

// import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      console.log('cow array from cowList', cows);

      // call a domStringBuilder function and pass in cows
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
