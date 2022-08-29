// ### Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
var challenge;
challenge = '30 Days of JavaScript';

// 2. Print the string on the browser console using __console.log()__
console.log(challenge);

// 3. Print the __length__ of the string on the browser console using _console.log()_
var len_challenge;
len_challenge = challenge.length;
console.log(len_challenge);

// 4. Change all the string characters to capital letters using __toUpperCase()__ method
let challenge_toUpperCase;
challenge_toUpperCase = challenge.toUpperCase();
console.log(challenge_toUpperCase);

// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method
let challenge_toLocaleLowerCase;
challenge_toLocaleLowerCase = challenge.toLocaleLowerCase();
console.log(challenge_toLocaleLowerCase);

// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
// let challenge_substr;
// challenge_substr = challenge.substr(3, 18);
// console.log(challenge_substr);
let challenge_substring;
challenge_substring = challenge.substring(0,2);
console.log(challenge_substring);

// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
let challenge_slice;
challenge_slice = challenge.substr(3, 20);
console.log(challenge_slice);

// 8. Check if the string contains a word __Script__ using __includes()__ method
let challenge_includes;
challenge_includes = challenge.includes("Script");
console.log(challenge_includes);

// 9. Split the __string__ into an __array__ using __split()__ method
let challenge_split;
challenge_split = challenge.split();
console.log(challenge_split);

// 10. Split the string 30 Days Of JavaScript at the space using __split()__ method
let challenge_split_space;
challenge_split_space = challenge.split(' ');
console.log(challenge_split_space);

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
let FANG, FANG_split;
FANG = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
FANG_split = FANG.split(',');
console.log(FANG_split);

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
let challenge_replace;
challenge_replace = challenge.replace('JavaScript', 'Python');
console.log(challenge_replace);

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
let challenge_charAt;
challenge_charAt = challenge.charAt(15);
console.log(challenge_charAt);

// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
let challenge_charCodeAt;
challenge_charCodeAt = challenge.charCodeAt(11);
console.log(challenge_charCodeAt);

// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
let challenge_indexOf;
challenge_indexOf = challenge.indexOf('a');
console.log(challenge_indexOf);

// 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.
let challenge_lastIndexOf;
challenge_lastIndexOf = challenge.lastIndexOf('a');
console.log(challenge_lastIndexOf);

// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let stringP, stringP_indexOf;
stringP = 'You cannot end a sentence with because because because is a conjunction';
stringP_indexOf = stringP.indexOf('because');
console.log(stringP_indexOf);

// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let stringP_lastIndexOf;
stringP_lastIndexOf = stringP.lastIndexOf('because');
console.log(stringP_lastIndexOf);

// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
let stringP_search;
stringP_search = stringP.search('because');
console.log(stringP_search);

// 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let stringA, stringA_trim;
stringA = ' 30 Days Of JavaScript ';
stringA_trim = stringA.trim();
console.log(stringA_trim);

// 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
let  challenge_startsWith;
challenge_startsWith = challenge.startsWith('30');
console.log(challenge_startsWith);

// 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
let  challenge_endsWith;
challenge_endsWith = challenge.endsWith('JavaScript');
console.log(challenge_endsWith);

// 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
let challenge_match;
let pattern = /a/gi
challenge_match = challenge.match(pattern);
console.log(challenge_match);

// 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let stringC, stringD, stringE;
stringC = '30 Days of ';
stringD = 'Javascript';
stringE = stringC.concat(stringD);
console.log(stringE);

// 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times
let challenge_repeat;
challenge_repeat = challenge.repeat(2);
console.log(challenge_repeat);
