const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;
const secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
const secondsPerYear = secondsPerDay * daysPerYear;

export class AgeCalculator {
  constructor(todayDate, birthDate) {
    this.todayDate = todayDate;
    this.birthDate = birthDate;
  }

  ageToSeconds(age) {
    return age * secondsPerYear;
  }

  timeDifference() {
    const startTime = moment(this.birthDate);
    const endTime = moment(this.todayDate);
    return endTime.diff(startTime, 'seconds');
  }
}
