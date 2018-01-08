import { TimeCruncher } from './../src/js/time-cruncher.js';

$(document).ready(function(){
  const a = '2018-01-05';
  const b = '1985-12-19';
  const newTimeCrunch = new TimeCruncher(a, b);

  console.log(newTimeCrunch.lifeRemaining(false, true, 'Europe', 'Mars'));
});
