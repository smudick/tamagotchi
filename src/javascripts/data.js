const data = [
  {
    title: 'Eat',
    id: '#eat',
    statusIndicator: 'Fullness',
    button1: 'Unhealthy',
    button1Icon: '<i class="fas fa-hamburger"></i>',
    button2: 'Healthy',
    button2Icon: '<i class="fas fa-carrot"></i>',
    button1Val: -3,
    button2Val: 10,
    score: 100,
  },
  {
    title: 'Play',
    id: '#play',
    statusIndicator: 'Fun',
    button1: 'Super-Fun',
    button1Icon: '<i class="fas fa-futbol"></i>',
    button2: 'Kinda-Fun',
    button2Icon: '<i class="fas fa-puzzle-piece"></i>',
    button1Val: 50,
    button2Val: 2,
    score: 50,
  },
  {
    title: 'Fight',
    id: '#fight',
    statusIndicator: 'Strength',
    button1: 'Run-Away',
    button1Icon: '<i class="fas fa-running"></i>',
    button2: 'Violence',
    button2Icon: '<i class="fas fa-bomb"></i>',
    button1Val: 1,
    button2Val: -10,
    score: 100,
  },
  {
    title: 'Sleep',
    id: '#sleep',
    statusIndicator: 'Energy',
    button1: 'Nap',
    button1Icon: '<i class="fas fa-couch"></i>',
    button2: 'Deep-Slumber',
    button2Icon: '<i class="fas fa-bed"></i>',
    button1Val: 50,
    button2Val: 60,
    score: 50,
  },
];

const getData = () => data;

export default { getData };
