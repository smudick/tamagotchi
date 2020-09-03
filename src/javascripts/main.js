import '../styles/main.scss';
import components from './components';
import data from './data';

const init = () => {
  components.quadBuilder('eat', data.getEat());
};

init();
