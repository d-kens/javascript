/*  
    - Date objects are objects that contain values that represent dates and times
    - The date objects can be changed and formatted.
    - epoch - The date your computer thinks time began 
*/


const date = new Date();


date.setFullYear(2024);
date.setMonth(4);
date.setDate(25);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();


console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);