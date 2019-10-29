import cowList from './components/cowlist/cowlist';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from './helpers/data/farmerCowData';

import '../styles/main.scss';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();

  farmerCowData.getFarmerCows()
    .then((farmerCows) => {
      console.log('from main is', farmerCows);
    })
    .catch((error) => console.error(error));
};


init();
