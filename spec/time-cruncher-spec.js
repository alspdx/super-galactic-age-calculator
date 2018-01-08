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
    expect(newTimeCrunch.timeDifference()).toEqual(1011312000);
  });

  it('should test whether TimeCruncher returns age in Mercury solar years', function() {
    expect(newTimeCrunch.timeDifference('Mercury')).toEqual(133.61872146118722);
  });

  it('should test whether TimeCruncher returns age in Venus solar years', function() {
    expect(newTimeCrunch.timeDifference('Venus')).toEqual(51.723376049491826);
  });

  it('should test whether TimeCruncher returns age in Mars solar years', function() {
    expect(newTimeCrunch.timeDifference('Mars')).toEqual(17.05770912270475);
  });

  it('should test whether TimeCruncher returns age in Jupiter solar years', function() {
    expect(newTimeCrunch.timeDifference('Jupiter')).toEqual(2.703920164475964);
  });

  it('should test whether TimeCruncher returns life expectancy', function() {
    expect(newTimeCrunch.lifeExpectancy(true, false, 'North America')).toEqual(72);
    expect(newTimeCrunch.lifeExpectancy(false, true, 'South America')).toEqual(80);
    expect(newTimeCrunch.lifeExpectancy(true, true, 'Asia')).toEqual(70);
    expect(newTimeCrunch.lifeExpectancy(false, true, 'Europe')).toEqual(83);
    expect(newTimeCrunch.lifeExpectancy(false, false, 'Australia')).toEqual(67);
    expect(newTimeCrunch.lifeExpectancy(true, false, 'Africa')).toEqual(55);
  });

  

  //Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. (Note that life expectancy shouldn’’t be a hard-coded value. After all, it can vary from country to country and depending on various demographics.)
  //If a user has already surpassed the average life expectancy, your application should account for (and test) this possible outcome as well.

});
