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

  ageToSeconds(ageInput) {
    return ageInput * secondsPerYear;
  }

  whichPlanet(planetName) {
    if (planetName === 'Earth') {
      return 1;
    } else if (planetName === 'Mercury') {
      return 0.24;
    } else if (planetName === 'Venus') {
      return 0.62;
    } else if (planetName === 'Mars') {
      return 1.88;
    } else if (planetName === 'Jupiter') {
      return 11.86;
    }
  }

  ageOnPlanet(planet) {
    let multiplier;
    if (planet) {
      multiplier = this.whichPlanet(planet) * secondsPerYear;;
    } else if (!planet) {
      multiplier = 1;
    }
    return this.beginTime.diff(this.endTime, 'seconds') / multiplier;
  }

  lifeExpectancy(smoker, exerciser, continent, planet) {
    const divider = this.whichPlanet(planet);
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
    return finalAge / divider;
  }

  lifeRemaining(smoker, exerciser, continent, planet) {
    const remaining = (this.lifeExpectancy(smoker, exerciser, continent, planet) - this.ageOnPlanet(planet)).toFixed(2);

    if (remaining > 0) {
      return `It looks as though you have approximately ${remaining} solar years left to live on ${planet}. Enjoy!`;
    } else if (remaining <= 0) {
      return `Holy smokes! At this point you should have been dead for ${-(remaining)} solar years on ${planet}!`;
    }
  }
}
