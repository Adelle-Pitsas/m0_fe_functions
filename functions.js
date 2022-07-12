// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log(`Good morning, here is your news for today:`);
}

printGreeting()
printGreeting()
printGreeting()

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function addMiles(distance) {
  console.log(`You have ${distance} miles to go.`);
}

addMiles(200)

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the
//minimum and maximum of a pay range for a posted job.
//The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function getJobInfo (company, lowRange, highRange) {
  var range = highRange - lowRange;
  console.log(`We found one job for you at ${company}. The pay range is ${range}.`)
}

getJobInfo("Patagonia", 80000, 120000)


// 4: Write a function that satifies the following interaction pattern:
function checkStock (amount, type) {
  if(amount <=3){
    var getStock = "is not stocked"
  }
  else if (amount > 3) {
    var getStock = "is stocked"
  }
  console.log(`${type} ${getStock}`)
}

checkStock(4, "Coffee");
// => "Coffee is stocked"


function checkStock (amount, type) {
  if(amount <=3){
    var getStock = "- running LOW"
  }
  else if (amount > 3) {
    var getStock = "- in stock"
  }
  console.log(`${type} ${getStock}`)
}

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"


function checkStock (amount, type) {
  if(amount === 0){
    var getStock = "- OUT of stock!"
  }
  else if (amount > 3) {
    var getStock = "- in stock"
  }
  else if (amount <=3) {
    var getStick = "- running LOW"
  }
  console.log(`${type} ${getStock}`)
}

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"


function checkStock (amount, type) {
  if(amount <=3){
    var getStock = "- running LOW"
  }
  else if (amount > 3) {
    var getStock = "- in stock"
  }
  console.log(`${type} ${getStock}`)
}

checkStock(1, "Salsa");
// => "Salsa - running LOW"
