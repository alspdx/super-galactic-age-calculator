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
    } else if (planetName === 'Mars') {
      yearMultiplier = 1.88;
    } else if (planetName === 'Jupiter') {
      yearMultiplier = 11.86;
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

  lifeExpectancy(smoker, exerciser, continent) {
    let finalAge;

    if (continent === 'Africa') {
      finalAge = 62;
    } else if (continent === 'Asia') {
      finalAge = 72;
    } else if (continent === 'Europe') {
      finalAge = 78;
    } else if (continent === 'North America') {
      finalAge = 79;
    } else if (continent === 'South America') {
      finalAge = 75;
    } else if (continent === 'Australia') {
      finalAge = 67;
    }

    if (smoker) {
      finalAge -= 7;
    }

    if (exerciser) {
      finalAge += 5;
    }
    return finalAge;
  }

  

}
