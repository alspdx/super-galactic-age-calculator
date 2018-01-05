(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay;
var secondsPerYear = secondsPerDay * daysPerYear;

var AgeCalculator = exports.AgeCalculator = function () {
  function AgeCalculator(todayDate, birthDate) {
    _classCallCheck(this, AgeCalculator);

    this.todayDate = todayDate;
    this.birthDate = birthDate;
  }

  _createClass(AgeCalculator, [{
    key: 'ageToSeconds',
    value: function ageToSeconds(age) {
      return age * secondsPerYear;
    }
  }, {
    key: 'timeDifference',
    value: function timeDifference() {
      var startTime = moment(this.birthDate);
      var endTime = moment(this.todayDate);
      return endTime.diff(startTime, 'seconds');
    }
  }]);

  return AgeCalculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _ageCalculator = require('./../src/js/age-calculator.js');

$(document).ready(function () {
  var a = '2017-01-05';
  var b = '1985-12-19';
  var newAge = new _ageCalculator.AgeCalculator(a, b);
  console.log("this long " + newAge.timeDifference());
});

},{"./../src/js/age-calculator.js":1}]},{},[2]);
