var moment = require('moment');

// Jan 1st 1970 


// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(8,'months');
// console.log(date.format('MMM Do YYYY'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp)

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));