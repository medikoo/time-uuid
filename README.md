# time-uuid
## Universally unique identifier in short web-friendly format.

Generated id's are composed out of current microseconds stamp, and random string.

### Usage

Generate id based on current time and random string:

```javascript
var generateId = require('time-uuid');
console.log(generateId()); // 7e7b249ksny
console.log(generateId()); // 7e7b249wyjy
console.log(generateId()); // 7e7b24ahlgy
```

Get unique time (in microseconds): 
 
_It doesn't guarantee accurate time representation, in first place it's about provision of *unique* microtime value and optionally it relies on some microtime provider which may not be available in current environement_
```javascript
var getTime = require('time-uuid/time');
console.log(getTime()); // 1356631360599486
console.log(getTime()); // 1356631360599698
console.log(getTime()); // 1356631360603625
```

Get unique id out of given microtime value
```javascript
var getIdByTime = require('time-uuid/get-by-time');
console.log(getIdByTime(getTime())); // 7e7b24alj5y
console.log(getIdByTime(getTime())); // 7e7b24aljyy
console.log(getIdByTime(getTime())); // 7e7b24alkhy
```

### Installation

	$ npm install time-uuid
	
To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

## Tests [![Build Status](https://travis-ci.org/medikoo/time-uuid.png)](https://travis-ci.org/medikoo/time-uuid)

	$ npm test
