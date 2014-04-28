'use strict';

var genId = require('../');

module.exports = function (t, a) {
	a(t('raz'), false, "Simple string");
	a(t(234234), false, "Number");
	a(t('2sdfsf23:sdfs'), false, "String with no aphanum chars");
	a(t(genId()), true, "Real id");
};
