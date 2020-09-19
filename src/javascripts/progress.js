const progress = () => {
  const eat = Number($('#Eat-score').html());
  const fun = Number($('#Play-score').html());
  const strength = Number($('#Fight-score').html());
  const energy = Number($('#Sleep-score').html());
  const progressVal = (eat + fun + strength + energy) / 4;
  $('#progress').html(`Overall Score = ${progressVal}%`);
};

export default { progress };
