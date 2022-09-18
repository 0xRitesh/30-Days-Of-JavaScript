// Stringify the students object with only firstName, lastName and skills properties


const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    isMarried: false,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', ]
}

let studentTxt = JSON.stringify(student, ['firstName', 'lastName', 'skills'])
console.log(studentTxt)