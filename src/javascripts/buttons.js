import data from './data';

const buttonClicks = () => {
  $('#Unhealthy').on('click', () => {
    let newScore = data.getData()[0].score;
    newScore += data.getData()[0].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Eat-score').html(newScore);
    data.getData()[0].score = newScore;
  });

  $('#Healthy').on('click', () => {
    let newScore = data.getData()[0].score;
    newScore += data.getData()[0].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Eat-score').html(newScore);
    data.getData()[0].score = newScore;
  });
  $('#Super-Fun').on('click', () => {
    let newScore = data.getData()[1].score;
    newScore += data.getData()[1].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Play-score').html(newScore);
    data.getData()[1].score = newScore;
  });
  $('#Kinda-Fun').on('click', () => {
    let newScore = data.getData()[1].score;
    newScore += data.getData()[1].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Play-score').html(newScore);
    data.getData()[1].score = newScore;
  });
  $('#Run-Away').on('click', () => {
    let newScore = data.getData()[2].score;
    newScore += data.getData()[2].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Fight-score').html(newScore);
    data.getData()[2].score = newScore;
  });
  $('#Violence').on('click', () => {
    let newScore = data.getData()[2].score;
    newScore += data.getData()[2].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Fight-score').html(newScore);
    data.getData()[2].score = newScore;
  });
  $('#Nap').on('click', () => {
    let newScore = data.getData()[3].score;
    newScore += data.getData()[3].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Sleep-score').html(newScore);
    data.getData()[3].score = newScore;
  });
  $('#Deep-Slumber').on('click', () => {
    let newScore = data.getData()[3].score;
    newScore += data.getData()[3].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Sleep-score').html(newScore);
    data.getData()[3].score = newScore;
  });
};

export default { buttonClicks };
