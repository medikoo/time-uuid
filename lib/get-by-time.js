'use strict';

// To make id smaller we get microgseconds count from more recent date
var start = Date.UTC(2011, 8, 21) * 1000

// Prefix with number, it reduces chances of collision with variable names
// (helpful if used as property names on objects)
  , prefix = String(Math.floor(Math.random() * 10))

// Make it more unique
  , postfix = Math.floor(Math.random() * 36).toString(36);

module.exports = function (time) {
	return prefix + (time - start).toString(36) + postfix;
};
