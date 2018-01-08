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
    const ageOnPlanetOutput = newTimeCrunch.ageOnPlanet(planet);
    const remainingLifeOutput = newTimeCrunch.lifeRemaining(userSmoker, userExerciser, continent, planet);

    $('.age-output').html(`<span>You are ${ageOnPlanetOutput.toFixed(2)} solar years of age on ${planet}.</span>`);
    $('.remaining-life-output').html(`<span>${remainingLifeOutput}</span>`);
  });
});
