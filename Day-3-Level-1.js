// ### Exercises: Level 1
/*
let name = prompt("What is your name")
console.log(name)

alert("Hello world")
*/

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

/*
console.log(`Hey ${name}, Please complete these details to processed`)
let firstName = prompt("First name: ")
let lastName = prompt("Last name: ")
let country = prompt("Country : ")
let city = prompt("City : ")
let age = prompt("Age : ")
let isMarried = prompt("Married Status : ")
let year = prompt('Year : ')

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));
*/

// 2. Check if type of '10' is equal to 10
console.log(typeof('10')==typeof(10));

// 3. Check if parseInt('9.8') is equal to 10
var num1 = parseInt('9.8');
console.log(typeof(num1)==typeof('10'));
 
// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
//    2. Write three JavaScript statement which provide falsy value.
console.log(1==1, 'HI'=="HI", 2+3==5)

console.log(1==2, 'HI'=="Hi", 2+3!=5)

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3
//    2. 4 >= 3
//    3. 4 < 3
//    4. 4 <= 3
//    5. 4 == 4
//    6. 4 === 4
//    7. 4 != 4
//    8. 4 !== 4
//    9. 4 != '4'
//    10. 4 == '4'
//    11. 4 === '4'
//    12. Find the length of python and jargon and make a falsy comparison statement.
var res1 = 4 > 3;
var res2 = 4 >= 3;
var res3 = 4 < 3;
var res4 = 4 <= 3;
var res5 = 4 == 4;
var res6 = (4 === 4);
var res7 = (4 != 4);
var res8 = (4 !== 4);
var res9 = (4 != '4');
var res10 = (4 == '4');
var res11 = (4 === '4');
var res12 = 'python';
var res13= 'jargon';

console.log(res1,res2,res3,res4,res5,res6,res7,res8,res9,res10,res11,res12==res13);


// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12
//    2. 4 > 3 && 10 > 12
//    3. 4 > 3 || 10 < 12
//    4. 4 > 3 || 10 > 12
//    5. !(4 > 3)
//    6. !(4 < 3)
//    7. !(false)
//    8. !(4 > 3 && 10 < 12)
//    9. !(4 > 3 && 10 > 12)
//    10. !(4 === '4')
//    11. There is no 'on' in both dragon and python
var rest1 =4 > 3 && 10 < 12;
var rest2 = 4 > 3 && 10 > 12;
var rest3 =  4 > 3 || 10 < 12;
var rest4 = 4 > 3 || 10 > 12;
var rest5 = !(4 > 3);
var rest6 = !(4 < 3);
var rest7 = !(false);
var rest8 = !(4 > 3 && 10 < 12);
var rest9 = !(4 > 3 && 10 > 12);
var rest10 = !(4 === '4');
var rest11 = 'python';
var rest12 = 'jargon';

console.log(rest1,rest2,rest3,rest4,rest5,rest6,rest7,rest8,rest9,rest10);

// 7. Use the Date object to do the following activities
//    1. What is the year today?
//    2. What is the month today as a number?
//    3. What is the date today?
//    4. What is the day today as a number?
//    5. What is the hours now?
//    6. What is the minutes now?
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
let date = new Date();
console.log(`${date.getFullYear()}`);
console.log(`${date.getMonth()}`);
console.log(`${date.getDate()}`);
console.log(`${date.getDay()}`);
console.log(`${date.getHours()}`)
console.log(`${date.getMinutes()}`)
console.log(`${date.getSeconds()}`);


