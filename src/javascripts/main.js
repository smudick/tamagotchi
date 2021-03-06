import '../styles/main.scss';
import components from './components';
import buttons from './buttons';
import progress from './progress';

const init = () => {
  components.quadBuilder();
  components.petBuilder();
  buttons.buttonClicks();
  progress.progress();
};

init();
