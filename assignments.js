'use strict';

const Stack = require('./stacks');

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
console.log(JSON.stringify(starTrek,null, 2));

