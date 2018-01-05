import { AgeCalculator } from './../src/js/age-calculator.js';

describe('AgeCalculator', function() {
  const today = '2017-01-05';
  const birth = '1985-12-19';
  let newAge;

  beforeEach(function() {
    newAge = new AgeCalculator();
  });


  it('should test whether AgeCalculator returns inputted age converted from years to seconds', function() {
    expect(newAge.ageToSeconds(1)).toEqual(31536000);
    expect(newAge.ageToSeconds(2)).toEqual(63072000);
  });

  it('should test whether AgeCalculator returns difference in seconds between two dates', function() {
    expect(newAge.timeDifference(today, birth)).toEqual(979776000);
  });

  // it('should test whether AgeCalculator returns age in Mercury years from inputted birthdate to current date', function() {
  //   expect(newAge)
  // });

});
