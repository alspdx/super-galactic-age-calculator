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

  it('should test whether TimeCruncher returns age in Mercury years from inputted birthdate to current date', function() {
    expect(newTimeCrunch.timeDifference('Mercury')).toEqual(133.61872146118722);
  });

  it('should test whether TimeCruncher returns age in Venus years from inputted birthdate to current date', function() {
    expect(newTimeCrunch.timeDifference('Venus')).toEqual(51.723376049491826);
  });

  it('should test whether TimeCruncher returns age in Mars years from inputted birthdate to current date', function() {
    expect(newTimeCrunch.timeDifference('Mars')).toEqual(17.05770912270475);
  });

  it('should test whether TimeCruncher returns age in Jupiter years from inputted birthdate to current date', function() {
    expect(newTimeCrunch.timeDifference('Jupiter')).toEqual(2.703920164475964);
  });


});
