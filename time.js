'use strict';

var now = require('microtime-x')

  , last = 0;

module.exports = exports = function () {
	var time = now();
	++last;
	if (time <= last) {
		if ((time + 1000) >= last) time = last + 1;
	}
	last = time;
	return time;
};

exports.increment = function () {
	if (last === 0) return exports();
	return ++last;
};
