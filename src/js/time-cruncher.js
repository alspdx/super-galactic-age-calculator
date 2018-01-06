const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerYear = 365;
const secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
const secondsPerYear = secondsPerDay * daysPerYear;

export class TimeCruncher {
  constructor(begin, end) {
    this.beginTime = moment(begin);
    this.endTime = moment(end);
  }

  ageToSeconds(age) {
    return age * secondsPerYear;
  }

  whichPlanet(planetName) {
    if (planetName === 'Earth') {
      return 1;
    } else if (planetName === 'Mercury') {
      return 0.24;
    }
  }

  timeDifference(planet) {
    const divider = this.whichPlanet(planet);
    return (this.beginTime.diff(this.endTime, 'seconds') / divider);
  }
}
