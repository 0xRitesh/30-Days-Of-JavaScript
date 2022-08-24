// ## Exercise: Level 2
// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let n1 = 10;
let n1t = typeof(n1);
let n2 = '10';
let n2t = typeof('10');
// console.log(n1t==n2t)
let n2n = Number(n2);
let n2nt = typeof(n2n)
console.log(n1t ===n2nt)

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let n3 = 9.8 ;
let n4 = 10;
let n3e = parseFloat(n3);
// console.log(n3e==n4);
let n3n = parseInt(n3+1);
console.log(n3n==n4);


// Check if 'on' is found in both python and jargon
let str1, str2;
str1 = 'python';
str2 = 'jargon';
console.log(str1.includes('on'));
console.log(str2.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let str3 = 'I hope this course is not full of jargon.';
console.log(str3.includes('jargon'));

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1   1   1   1   1\n2   1   2   4   8\n3   1   3   9   27\n4   1   4   16  64\n5   1   5   25  125')

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str4= 'You cannot end a sentence with because because because is a conjunction';
let str5 = str4.replace('You cannot end a sentence with ','');
console.log(str5.replace(' is a conjunction',''));
