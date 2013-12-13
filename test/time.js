'use strict';

module.exports = function (t, a) {
	var last;
	a(typeof t(), 'number', "Type");
	a.not(t(), t(), "Unique");
	last = t();
	a(t.increment(), ++last, "Increment");
	a(t.increment(), ++last, "Increment #2");
	a(t() > ++last, true, "Further");
};
