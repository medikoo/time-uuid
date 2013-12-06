'use strict';

module.exports = function (t, a) {
	var last;
	a(typeof t(), 'number', "Type");
	a.not(t(), t(), "Unique");
	last = t();
	a(t.increment(), last + 1, "Increment");
	a(t() > last + 1, true, "Further");
};
