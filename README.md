# time-uuid - Get unique id based on current time

Universally unique identifier in short non standard UUID format.

```javascript
// Generate id based on current time and random string:
var generateId = require('time-uuid');
console.log(generateId()); // 7e7b249ksny
console.log(generateId()); // 7e7b249wyjy
console.log(generateId()); // 7e7b24ahlgy

// Get unique time (in microseconds).
// It doesn't guarantee accurate time representation,
// in first place it's about providing *unique* microtime value,
// and optionally it relies on some kind of microtime provider which may not be
// available in current environement
var getTime = require('time-uuid/lib/time');
console.log(getTime()); // 1356631360599486
console.log(getTime()); // 1356631360599698
console.log(getTime()); // 1356631360603625

// Get unique id out of given microtime value
var getIdByTime = require('time-uuid/lib/get-by-time');
console.log(getIdByTime(getTime())); // 7e7b24alj5y
console.log(getIdByTime(getTime())); // 7e7b24aljyy
console.log(getIdByTime(getTime())); // 7e7b24alkhy
```

## Installation
### NPM

In your project path:

	$ npm install time-uuid

### Browser

You can easily bundle npm packages for browser with [modules-webmake](https://github.com/medikoo/modules-webmake)

## Tests [![Build Status](https://travis-ci.org/medikoo/time-uuid.png)](https://travis-ci.org/medikoo/time-uuid)

	$ npm test
