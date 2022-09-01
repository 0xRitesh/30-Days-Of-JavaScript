// ### Exercises: Level 1

// 1. Create an empty object called dog
let dog = {};

// 1. Print the the dog object on the console
console.log(dog);

// 1. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
dog.name = "jasper";
dog.legs = 4;
dog.color = "brown"
dog.age = 4;
dog.bark = function () {
    console.log("woof woof woof")
}

// 1. Get name, legs, color, age and bark value from the dog object
// 1. Set new properties the dog object: breed, getDogInfo
console.log(Object.values(dog));
dog.breed = "german shepherd";
dog.getDogInfo = function () {
    console.log(Object.values(this));
}