'use strict';

var time      = require('./time')
  , getByTime = require('./get-by-time');

module.exports = function () { return getByTime(time()); };
