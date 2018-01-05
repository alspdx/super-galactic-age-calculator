import { TimeCruncher } from './../src/js/time-cruncher.js';

describe('TimeCruncher', function() {
  const today = '2017-01-05';
  const birth = '1985-12-19';
  let newTimeCrunch;

  beforeEach(function() {
    newTimeCrunch = new TimeCruncher(today, birth);
  });


  it('should test whether TimeCruncher returns inputted age converted from years to seconds', function() {
    expect(newTimeCrunch.ageToSeconds(1)).toEqual(31536000);
    expect(newTimeCrunch.ageToSeconds(2)).toEqual(63072000);
  });

  it('should test whether TimeCruncher returns difference in seconds between two dates', function() {
    expect(newTimeCrunch.timeDifference()).toEqual(979776000);
  });

  // it('should test whether TimeCruncher returns age in Mercury years from inputted birthdate to current date', function() {
  //   expect(newAge)
  // });

});
