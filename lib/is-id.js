'use strict';

var isId = RegExp.prototype.test.bind(/^\d[a-z0-9]{3,}$/);

module.exports = function (value) {
	if (typeof value !== 'string') return false;
	return isId(value);
};
