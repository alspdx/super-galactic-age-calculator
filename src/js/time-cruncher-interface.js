import { TimeCruncher } from './../src/js/time-cruncher.js';

$(document).ready(function() {
  $('#user-input').submit(function(e) {
    e.preventDefault();
    const birthDate = $('#birthdate').val();
    const todayDate = moment().format('YYYY-MM-DD');
    const continent = $('#continent').val();
    const planet = $('#planet').val();
    const userSmoker = $('input[name=smoker]:checked').val();
    const userExerciser = $('input[name=exerciser]:checked').val();
    const newTimeCrunch = new TimeCruncher(todayDate, birthDate);
    const output = newTimeCrunch.lifeRemaining(userSmoker, userExerciser, continent, planet);
    $('.output-message').html(`<span>${output}</span>`);
  });
});
