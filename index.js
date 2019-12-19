//import {map} from 'lodash';
const _ = require('lodash');

console.log('Hello world!');

const test = [1, 2, 3, 4, 5];

const newTest = _.map(test, (amount) => (++amount));

console.log(JSON.stringify(newTest));

for(let i = 0; i < newTest.length; i++) {
    console.log(newTest[i]);
}



