/*
    - ES6 Module: An external file that contains reusable code  that can imported into other JS files.
    - Allows writing reusable code for many different apps
    - Can contain variables, classes, functions and more
    - Introduced as part of ECMAScript 2015 update.
*/
import { PI, getArea, getCircumference, getVolume } from './mathUtil.js'

console.log(PI);

const circumfrence = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(circumfrence.toFixed(2));
console.log(area.toFixed(2));
console.log(volume.toFixed(2));