import data from './data';
import components from './components';

const getButtonId = () => {
  $('button').click((event) => event.target.nodeName);
};

const buttonClicks = () => {
  const buttonId = getButtonId();
  console.warn(buttonId);
  const buttonData = data.getData();
  if (buttonId === buttonData.button1) {
    buttonData.score += buttonData.button1Val;
  } else if (buttonId === buttonData.button2) {
    buttonData.score += buttonData.button2Val;
  }
  components.quadBuilder();
};

export default { buttonClicks };
