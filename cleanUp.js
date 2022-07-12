// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askQuestion() {
  console.log("Hello, what is your name?")
}

askQuestion()
//changed function to start with a verb in order to follow best practices for naming conventions


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//Indented lines 21 and 22 for ease of reading

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
      }

makeFreshPesto();
//line 30 was "func" not "function". Also moved curly bracket from line 35 to line 36

//  EX 4:
function average(num1, num2)  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`)
  }

average(5,6);
//There was no code to call the function, so added code at the bottom.
//Moved period inside parenthesis on line 47.
//moved first curly bracket from line 43 to line 42
