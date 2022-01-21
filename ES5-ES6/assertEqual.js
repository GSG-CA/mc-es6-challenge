// convert to arrow function
function sumNum(num1, num2) {
  return num1 + num2;
}

const odds = evens.map(function (v) {
  return v + 1;
});

// Add default parameters to sum to have the same functionality
function sum(x, y, z) {
  if (y === undefined){
    y = 7;
  }  
  if (z === undefined){
    z = 42;
  }  
  return x + y + z;
}

var calculateArea = function (height, width) {
  height = height || 50;
  width = width || 80;
  return height * width;
};

// destruct function arguments
function getUserData(user) {
  var name = user.name;
  var age = arg.age;
  var firstName = name.firstName;
  var lastName = name.lastName;

  console.log(firstName, lastName, age);
}

// what about array destructuring
var list = [1, 2, 3];
var a = list[0],
  b = list[2];

// use template literals
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message =
  "Hello " +
  customer.name +
  ",\n" +
  "want to buy " +
  card.amount +
  " " +
  card.product +
  " for\n" +
  "a total of " +
  card.amount * card.unitprice +
  " bucks?";

// short syntax for object properties in obj below
var x = 0;
var  y = 0;
var obj = { x: x, y: y };
