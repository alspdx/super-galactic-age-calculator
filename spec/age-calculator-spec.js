import { AgeCalculator } from './../src/js/age-calculator.js';

describe('AgeCalculator', function() {

  let newAge;

  beforeEach(function() {
    const a = '2017-01-05';
    const b = '1985-12-19';
    newAge = new AgeCalculator(a, b);
  });


  it('should test whether AgeCalculator returns inputted age converted from years to seconds', function() {
    expect(newAge.ageToSeconds(1)).toEqual(31536000);
    expect(newAge.ageToSeconds(2)).toEqual(63072000);
  });

  it('should test whether AgeCalculator returns difference in seconds between two dates', function() {
    expect(newAge.timeDifference()).toEqual(979776000);
  });
});
