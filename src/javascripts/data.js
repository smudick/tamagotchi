const data = [
  {
    title: 'Eat',
    id: '#eat',
    statusIndicator: 'Fullness',
    button1: 'Unhealthy',
    button2: 'Healthy',
    button1Val: -10,
    button2Val: 10,
    initialScore: 100,
  },
  {
    title: 'Play',
    id: '#play',
    statusIndicator: 'Fun',
    button1: 'Super Fun',
    button2: 'Kinda Fun',
    button1Val: 50,
    button2Val: 2,
    initialScore: 50,
  },
  {
    title: 'Fight',
    id: '#fight',
    statusIndicator: 'Strength',
    button1: 'Run Away',
    button2: 'Violence',
    button1Val: 1,
    button2Val: -10,
    initialScore: 100,
  },
  {
    title: 'Sleep',
    id: '#sleep',
    statusIndicator: 'Energy',
    button1: 'Nap',
    button2: 'Deep Slumber',
    button1Val: 50,
    button2Val: 60,
    initialScore: 50,
  },
];

const getData = () => data;

export default { getData };
