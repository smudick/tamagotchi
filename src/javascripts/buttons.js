import data from './data';

const buttonClicks = () => {
  $('#Unhealthy').on('click', () => {
    let newScore = data.getData()[0].score;
    newScore += data.getData()[0].button1Val;
    $('#Eat-score').html(newScore);
    data.getData()[0].score = newScore;
  });
  $('#Healthy').on('click', () => {
    let newScore = data.getData()[0].score;
    newScore += data.getData()[0].button2Val;
    $('#Eat-score').html(newScore);
    data.getData()[0].score = newScore;
  });
  $('#Super-Fun').on('click', () => {
    let newScore = data.getData()[1].score;
    newScore += data.getData()[1].button1Val;
    $('#Play-score').html(newScore);
    data.getData()[1].score = newScore;
  });
  $('#Kinda-Fun').on('click', () => {
    let newScore = data.getData()[1].score;
    newScore += data.getData()[1].button2Val;
    $('#Play-score').html(newScore);
    data.getData()[1].score = newScore;
  });
  $('#Run-Away').on('click', () => {
    let newScore = data.getData()[2].score;
    newScore += data.getData()[2].button1Val;
    $('#Fight-score').html(newScore);
    data.getData()[2].score = newScore;
  });
  $('#Violence').on('click', () => {
    let newScore = data.getData()[2].score;
    newScore += data.getData()[2].button2Val;
    $('#Fight-score').html(newScore);
    data.getData()[2].score = newScore;
  });
  $('#Nap').on('click', () => {
    let newScore = data.getData()[3].score;
    newScore += data.getData()[3].button1Val;
    $('#Sleep-score').html(newScore);
    data.getData()[3].score = newScore;
  });
  $('#Deep-Slumber').on('click', () => {
    let newScore = data.getData()[3].score;
    newScore += data.getData()[3].button2Val;
    $('#Sleep-score').html(newScore);
    data.getData()[3].score = newScore;
  });
};

export default { buttonClicks };
