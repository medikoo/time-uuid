'use strict';

var now = require('microtime-x')

  , last = 0;

module.exports = exports = function () {
	var time = now();
	++last;
	while (time <= last) ++time;
	last = time;
	return time;
};

exports.increment = function () {
	if (last === 0) return exports();
	return ++last;
};
