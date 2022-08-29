// ### Exercises: Level 1
// Note: There are prompts already added in this file which will call the functions when its run. No need to modify those


// 1. Implement the function checkDrivingAge. If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```

// Implement this function
function checkDrivingAge(age) {
    if (age > 18) {
      console.log("You are old enough to drive");
    } else {
      var temp = 18-age;
      console.log(`you are left with ${temp} year(s) to drive`);
  }
  }
  
  // DO NOT MODIFY THIS. its for used for testing the solution
  const ageInput= prompt('Enter your age:', 0);
  const ageInputNum = parseInt(ageInput, 10);
  checkDrivingAge(ageInputNum)
  
  
  
  // 2. Implement the function compareAge to compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
  
  //    ```sh
  //    Enter your age: 30
  //    You are 5 years older than me.
  //    Enter your age: 20
  //    I am 5 years older than you.
  //    Enter your age: 25
  //    We both are of the same age.
  //    ```
  
  // Implement this function
  const age = ageInput;
  // var yourAge =  prompt('Enter your age rn:');
  function compareAge(yourAge) {
    if (age > yourAge) {
      temp = age - yourAge;
      console.log(`I am older than you with ${temp}`)
    } else {
      temp = yourAge - age;
      console.log(`you are ${temp} years older than me`)
  }
  }
  
  // DO NOT MODIFY THIS. its for used for testing the solution
  for (let i = 0; i < 3; i++) {
    const yourAgeInput = prompt('Enter your age:', 0);
    const yourAge = parseInt(yourAgeInput, 10);
    compareAge(yourAge)
  }
  
  
  
  // 3. Implement the function compareNumbers to compare the numbers. It receives a and b as input. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
  
  //     - using if else
  //     - ternary operator.
  
  //     ```js
  //       let a = 4
  //       let b = 3
  //     ```
  
  //     ```sh
  //       Enter number a: 4
  //       4 is greater than 3
  //       4 is greater than 3
  //
  //     ```
  
  // Implement this function
  function compareNumbers(a, b) {
    if (a > b) {
      console.log(`${a} is greater than ${b}`);
    } else if (a<b){
      console.log(`${a} is less than ${b}`);
    }else{
      console.log(`${a} is equal to ${b}`);
    }
  }
  
  // DO NOT MODIFY THIS. its for used for testing the solution
  const a = parseInt(prompt('Enter number a:', 0));
  const b = parseInt(prompt('Enter number b:', 0));
  compareNumbers(a, b)
  
  
  
  
  // 4. Implement the function checkEvenOdd. It receives num as input. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
  
  //     ```sh
  //     Enter a number: 2
  //     2 is an even number
  
  //     Enter a number: 9
  //     9 is is an odd number
  //     ```
  
  // Implement this function
  function checkEvenOdd(num) {
    if (num % 2 === 0) {
      console.log(`${num} is an even number`)
    } else if (num % 2 !== 0) {
      console.log(`${num} is an odd number`)
  }
  }
  
  // DO NOT MODIFY THIS. its for used for testing the solution
  const num1 = parseInt(prompt('Enter number:', 0));
  checkEvenOdd(num1)
  const num2 = parseInt(prompt('Enter number:', 0));
  checkEvenOdd(num2)
  