import data from './data';

const buttonClicks = () => {
  data.getData().forEach((item) => {
    $(`#${item.button1}`).click(() => {
      let { score } = item;
      score += item.button1Val;
      $(`#${item.title}-score`).html(score);
      score = item.button1Val;
    });
  });
};

export default { buttonClicks };
