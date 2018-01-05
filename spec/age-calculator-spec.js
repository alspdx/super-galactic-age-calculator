import { AgeCalculator } from './../src/js/age-calculator.js';

describe('AgeCalculator', function() {

  let newAge;

  beforeEach(function() {
    newAge = new AgeCalculator();
  });


  it('should test whether AgeCalculator returns inputted age converted from years to seconds', function() {
    expect(newAge.ageToSeconds(1)).toEqual(31536000);
    expect(newAge.ageToSeconds(2)).toEqual(63072000);
  });
});
