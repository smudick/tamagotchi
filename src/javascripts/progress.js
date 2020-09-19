const progress = () => {
  const eat = Number($('#Eat-score').html());
  const fun = Number($('#Play-score').html());
  const strength = Number($('#Fight-score').html());
  const energy = Number($('#Sleep-score').html());
  const progressVal = Math.floor((eat + fun + strength + energy) / 4);
  if (eat === 0 || fun === 0 || strength === 0 || energy === 0) {
    $('#progress').html('<div class="progress">Oh No! Tamagotchi Died!</div>');
    $('#pet').html('<i class="fas fa-skull-crossbones skull"></i>');
  } else {
    $('#progress').html(`<div class="progress">Overall Score = ${progressVal}%</div>`);
  }
};

export default { progress };
