// ### Exercise: Level 1

// ```js
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]
let countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// ```
let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"]

// 1. Declare an _empty_ array;
let empty_array = [ ]

// 2. Declare an array with more than 5 number of elements
let ran_array = [ 'H1','H2','H3','H4','H5','H6'];

// 3. Find the length of your array
console.log(ran_array.length);

// 4. Get the first item, the middle item and the last item of the array
let firstItem = console.log(ran_array[0]);
let middleItem = console.log(ran_array[3]);
let lastItem = console.log(ran_array[ran_array.length - 1]);

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
let mixedDataType = ["victor", 19, true, null, {
    favoriteFood: ["beans", "plantain", "rice and stew"]
}, undefined]
console.log(mixedDataType.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let techCompanies = ["google", "microsoft", "oracle", "amazon", "ibm", "oracle", "apple"];

// 7. Print the array using _console.log()_
console.log(techCompanies);

// 8. Print the number of companies in the array
console.log(techCompanies.length);

// 9. Print the first company, middle and last company
console.log(techCompanies[0]);
console.log(techCompanies[4]);
console.log(techCompanies[techCompanies.length - 1]);

// 10. Print out each company
for (let i =0;i<techCompanies.length;i++){
  console.log(techCompanies[i]);
}

// 11. Change each company name  to uppercase one by one and print them out
for (let i =0;i<techCompanies.length;i++){
  console.log(techCompanies[i].toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
let searchTechComp = prompt("enter company to search");
if (techCompanies.includes(searchTechComp)) {
    console.log(searchTechComp)
} else {
    console.log("company not found")
}

// 14. Filter out companies which have more than one 'o' without the filter method
let oo = []
for (let i = 0; i < techCompanies.length; i++) {
    oo.push(techCompanies[i].includes("oo"));
}

// 15. Sort the array using _sort()_ method
techCompanies.sort();

// 16. Reverse the array using _reverse()_ method
techCompanies.reverse();

// 17. Slice out the first 3 companies from the array
techCompanies.slice(0, 3);

// 18. Slice out the last 3 companies from the array
techCompanies.slice(techCompanies.length - 1, 3)

// 19. Slice out the middle IT company or companies from the array
techCompanies.slice(Math.floor(techCompanies.length / 2), 1);

// 20. Remove the first IT company from the array
techCompanies.pop();

// 21. Remove the middle IT company or companies from the array
techCompanies.splice(4,1);

// 22. Remove the last IT company from the array
techCompanies.splice(techCompanies.length-1)
// 23. Remove all IT companies
techCompanies.length = 0;
console.log(techCompanies);