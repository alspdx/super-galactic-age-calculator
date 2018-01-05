import { AgeCalculator } from './../src/js/age-calculator.js';

$(document).ready(function(){
  const a = '2017-01-05';
  const b = '1985-12-19';
  const newAge = new AgeCalculator(a, b);
  console.log("this long " + newAge.timeDifference());
});
