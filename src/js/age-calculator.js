const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;
const secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
const secondsPerYear = secondsPerDay * daysPerYear;

export class AgeCalculator {
  constructor() {
  }

  ageToSeconds(age) {
    return age * secondsPerYear;
  }

  timeDifference(begin, end) {
    const beginTime = moment(begin);
    const endTime = moment(end);
    return beginTime.diff(endTime, 'seconds');
  }
}
