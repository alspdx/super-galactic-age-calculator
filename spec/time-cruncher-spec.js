import { TimeCruncher } from './../src/js/time-cruncher.js';

describe('TimeCruncher', function() {
  const today = '2018-01-05';
  const birth = '1985-12-19';
  let newTimeCrunch;

  beforeEach(function() {
    newTimeCrunch = new TimeCruncher(today, birth);
  });

  it('should test whether TimeCruncher returns inputted age converted from years to seconds', function() {
    expect(newTimeCrunch.ageToSeconds(1)).toEqual(31536000);
    expect(newTimeCrunch.ageToSeconds(2)).toEqual(63072000);
  });

  it('should test whether TimeCruncher returns difference in seconds between two Earth dates', function() {
    expect(newTimeCrunch.ageOnPlanet()).toEqual(1011312000);
  });

  it('should test whether TimeCruncher returns age in Mercury solar years', function() {
    expect(newTimeCrunch.ageOnPlanet('Mercury')).toEqual(133.61872146118722);
  });

  it('should test whether TimeCruncher returns age in Venus solar years', function() {
    expect(newTimeCrunch.ageOnPlanet('Venus')).toEqual(51.723376049491826);
  });

  it('should test whether TimeCruncher returns age in Mars solar years', function() {
    expect(newTimeCrunch.ageOnPlanet('Mars')).toEqual(17.05770912270475);
  });

  it('should test whether TimeCruncher returns age in Jupiter solar years', function() {
    expect(newTimeCrunch.ageOnPlanet('Jupiter')).toEqual(2.703920164475964);
  });

  it('should test whether TimeCruncher returns life expectancy in solar years on Earth', function() {
    expect(newTimeCrunch.lifeExpectancy(true, false, 'North America', 'Earth')).toEqual(72);
    expect(newTimeCrunch.lifeExpectancy(false, true, 'South America', 'Earth')).toEqual(80);
    expect(newTimeCrunch.lifeExpectancy(true, true, 'Asia', 'Earth')).toEqual(70);
    expect(newTimeCrunch.lifeExpectancy(false, true, 'Europe', 'Earth')).toEqual(83);
    expect(newTimeCrunch.lifeExpectancy(false, false, 'Australia', 'Earth')).toEqual(67);
    expect(newTimeCrunch.lifeExpectancy(true, false, 'Africa', 'Earth')).toEqual(55);
  });

  it('should test whether TimeCruncher returns life expectancy in solar years on other planets', function() {
    expect(newTimeCrunch.lifeExpectancy(true, false, 'North America', 'Mercury')).toEqual(300);
    expect(newTimeCrunch.lifeExpectancy(true, false, 'North America', 'Venus')).toEqual(116.12903225806451);
    expect(newTimeCrunch.lifeExpectancy(true, false, 'North America', 'Earth')).toEqual(72);
    expect(newTimeCrunch.lifeExpectancy(true, false, 'North America', 'Mars')).toEqual(38.297872340425535);
    expect(newTimeCrunch.lifeExpectancy(true, false, 'North America', 'Jupiter')).toEqual(6.070826306913997);

  });

  it('should test whether TimeCruncher returns remaining life in solar years on each planet', function() {
    expect(newTimeCrunch.lifeRemaining(true, false, 'North America', 'Mercury')).toEqual('It looks as though you have approximately 166.38 solar years left to live on Mercury. Enjoy!');
    expect(newTimeCrunch.lifeRemaining(true, false, 'North America', 'Venus')).toEqual('It looks as though you have approximately 64.41 solar years left to live on Venus. Enjoy!');
    expect(newTimeCrunch.lifeRemaining(true, false, 'North America', 'Earth')).toEqual('It looks as though you have approximately 39.93 solar years left to live on Earth. Enjoy!');
    expect(newTimeCrunch.lifeRemaining(true, false, 'North America', 'Mars')).toEqual('It looks as though you have approximately 21.24 solar years left to live on Mars. Enjoy!');
    expect(newTimeCrunch.lifeRemaining(true, false, 'North America', 'Jupiter')).toEqual('It looks as though you have approximately 3.37 solar years left to live on Jupiter. Enjoy!');
  });

  it('should test whether TimeCruncher returns a special message if the user has passed the average life expectancy', function() {
    const birthTwo = '1902-12-25';
    const anotherNewTimeCruncher = new TimeCruncher(today, birthTwo);
    expect(anotherNewTimeCruncher.lifeRemaining(true, false, 'North America', 'Earth')).toEqual('Holy smokes! You should have been dead -43.11 Earth years ago!');
  });

  //If a user has already surpassed the average life expectancy, your application should account for (and test) this possible outcome as well.

});
