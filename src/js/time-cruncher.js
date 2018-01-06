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
    let yearMultiplier;

    if (planetName === 'Earth') {
      yearMultiplier = 1;
    } else if (planetName === 'Mercury') {
      yearMultiplier = 0.24;
    } else if (planetName === 'Venus') {
      yearMultiplier = 0.62;
    }
    return yearMultiplier * secondsPerYear;
  }

  timeDifference(planet) {
    let divider;
    if (planet) {
      divider = this.whichPlanet(planet);
    } else if (!planet) {
      divider = 1;
    }
    return this.beginTime.diff(this.endTime, 'seconds') / divider;
  }
}
