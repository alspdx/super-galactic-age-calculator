import { AgeCalculator } from './../src/js/age-calculator.js';

$(function() {
  $('#user-input').submit(function(event) {
    event.preventDefault();
    const userAge = $('#age-input').val();
    const newCalculation = new AgeCalculator(userAge);
    $('#age-output').text();
  });
});
