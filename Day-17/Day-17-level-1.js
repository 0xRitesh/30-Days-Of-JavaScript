// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.

let profile = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    country: "US",
    city: "CA",
}

let txt = JSON.stringify(profile);
localStorage.setItem("user", "txt");