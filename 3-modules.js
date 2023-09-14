// modules - Encapsulated code (only share minimum)
// commonJS, every file is module (by default)

// const { john, peter } = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

// sayHi('susan');
// sayHi(john);
// sayHi(peter);

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);
