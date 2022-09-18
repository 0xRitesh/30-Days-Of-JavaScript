// Exercises Level 1
// Change skills array to JSON using JSON.stringify()
// Stringify the age variable
// Stringify the isMarried variable
// Stringify the student object

const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
const skillsTxt = JSON.stringify(skills)
console.log(skillsTxt);

let age = 250;
const ageTxt = JSON.stringify(age)
console.log(ageTxt)

let isMarried = true
const isMTxt = JSON.stringify(isMarried)
console.log(isMTxt);

const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}
let studentTxt = JSON.stringify(student)