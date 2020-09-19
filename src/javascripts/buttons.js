import data from './data';
import progress from './progress';

const buttonClicks = () => {
  $('#Unhealthy').on('click', () => {
    let newScore = data.getData()[0].score;
    newScore += data.getData()[0].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Eat-score').html(newScore);
    data.getData()[0].score = newScore;
    progress.progress();
  });

  $('#Healthy').on('click', () => {
    let newScore = data.getData()[0].score;
    newScore += data.getData()[0].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Eat-score').html(newScore);
    data.getData()[0].score = newScore;
    progress.progress();
  });
  $('#Super-Fun').on('click', () => {
    let newScore = data.getData()[1].score;
    newScore += data.getData()[1].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Play-score').html(newScore);
    data.getData()[1].score = newScore;
    progress.progress();
  });
  $('#Kinda-Fun').on('click', () => {
    let newScore = data.getData()[1].score;
    newScore += data.getData()[1].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Play-score').html(newScore);
    data.getData()[1].score = newScore;
    progress.progress();
  });
  $('#Run-Away').on('click', () => {
    let newScore = data.getData()[2].score;
    newScore += data.getData()[2].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Fight-score').html(newScore);
    data.getData()[2].score = newScore;
    progress.progress();
  });
  $('#Violence').on('click', () => {
    let newScore = data.getData()[2].score;
    newScore += data.getData()[2].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Fight-score').html(newScore);
    data.getData()[2].score = newScore;
    progress.progress();
  });
  $('#Nap').on('click', () => {
    let newScore = data.getData()[3].score;
    newScore += data.getData()[3].button1Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Sleep-score').html(newScore);
    data.getData()[3].score = newScore;
    progress.progress();
  });
  $('#Deep-Slumber').on('click', () => {
    let newScore = data.getData()[3].score;
    newScore += data.getData()[3].button2Val;
    if (newScore > 100) {
      newScore = 100;
    }
    $('#Sleep-score').html(newScore);
    data.getData()[3].score = newScore;
    progress.progress();
  });
};

export default { buttonClicks };
