// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, 
// enrolled keys and values for the keys. Store the student object in your browser localStorage.

let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    skills: ["html", "css", "javascript", "netlify"],
    country: "US"
}

let txt = JSON.stringify(student)
localStorage.setItem("s1", "txt")