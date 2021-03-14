var drop1Line = " ";
/*
// Lesson 1
// Question 1
var requiredName = "Gertrude";
var supppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === supppliedName.toLowerCase()) {
  console.log("Names are equal");
} else console.log("The names are NOT equal");

// Question 2
var username = "myusername1";
var lengthOfUsername = username.length;
var minimumChar = 4;
var maximumChar = 10;

if (lengthOfUsername >= minimumChar && lengthOfUsername <= maximumChar) {
  console.log("Acceptable username");
} else {
  if (lengthOfUsername < minimumChar) {
    console.log("Username is too short");
  }
  if (lengthOfUsername > maximumChar) {
    console.log("Username is too long");
  }
}

// Question 3
var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if (
  invoicePaid === true &&
  productDispatched === true &&
  customerHasSigned === true
) {
  console.log("Order complete");
} else {
  if (!invoicePaid) {
    console.log("The invoice has not been paid");
  }
  if (!productDispatched) {
    console.log("Product not dispatched");
  }
  if (!customerHasSigned) {
    console.log("Customer has NOT signed");
  }
}

// Question 4
var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if (!invoicePaid || !productDispatched || !customerHasSigned) {
  console.log("Order missing necessary actions");
} else {
  console.log("Order complete");
}

// Lesson 2
console.log(drop1Line);
// Question 1
var winningNumbers = [1, 76, 2, 16, 7];
console.log(winningNumbers[2]);

// Question 2
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

vegetables.push("Hot dogs");
console.log(vegetables.length);

// Question 3
var randomThings = ["pumpkin", false, 23, true, "Tomato"];

for (var i = 0; i < randomThings.length; i++) {
  var things = randomThings[i];
  console.log(things);
}

// Question 4
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
  var typeOfItem = typeof moreThings[i];

  if (typeOfItem === "number") console.log(moreThings[i]);
}

// Question 5
var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var sortedArray = ingredients.sort();

for (var i = 0; i < sortedArray.length; i++) {
  console.log(sortedArray[i]);
}

// Question 6
var characters = [
  "Gob",
  "Michael",
  "George Michael",
  "Lindsay",
  "Buster",
  "Maeby",
  "Tobias",
  "Lucille",
];

for (var i = 0; i < characters.length; i++) {
  if (i % 2 === 1) {
    console.log(characters[i]);
  }
}

//Lesson 3
console.log(drop1Line);
// Question 1
var product = {
  name: "Chicken feet",
  price: 149.99,
};

console.log(product.price);

// Question 2
var animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i].colour);
}

// Question 3
var dinnerOptions = [
  {
    name: "fish and Dips",
    price: 11.95,
    onSpecial: true,
  },
  {
    name: "Bacon and Frogs",
    price: 12.99,
    onSpecial: false,
  },
  {
    name: "Mince Flies",
    price: 19.0,
    onSpecial: true,
  },
];

for (var i = 0; i < dinnerOptions.length; i++) {
  var isOnSpecial = dinnerOptions[i].onSpecial;
  var productName = dinnerOptions[i].name;

  if (isOnSpecial === true) {
    console.log(productName);
  }
}

// Question 4
var people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];
for (var i = 0; i < people.length; i++) {
  var age = people[i].age;
  var fullName = people[i].firstName + " " + people[i].lastName;

  if (age >= 20 && age <= 50) {
    console.log(fullName);
  }
}

// Question 5
var products = [
  {
    name: "Elephant eggs",
    price: 45.0,
  },
  {
    name: "Bucket of water",
    price: 459.99,
  },
  {
    name: "4 cabbages",
    price: 500.95,
  },
];

var productContainer = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
  productContainer.innerHTML +=
    "<li>" + products[i].name + " - " + products[i].price + "</li>";
}
*/
//Lesson 4
console.log(drop1Line);
// Question 1
function logFunc() {
  console.log("What the func is this nonsense?");
}

logFunc();

// Question 2
function logName(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  console.log(fullName);
}

logName("Mary", "Magdalena");

// Question 3
function multipliedNumbers(firstNumber, secondNumber) {
  var typeOfFirst = typeof firstNumber;
  var typeOfSecond = typeof secondNumber;

  if (typeOfFirst !== "number" || typeOfSecond !== "number") {
    return "Please supply number values";
  }

  return firstNumber * secondNumber;
}

var result = multipliedNumbers("a", 3);
console.log(result);

multipliedNumbers();

// Question 4
function convertNumbers(number1, number2, number3) {
  var convertedNum1 = parseFloat(number1);
  var convertedNum2 = parseFloat(number2);
  var convertedNum3 = parseFloat(number3);

  if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
    return "Invalid argument types";
  }

  return convertedNum1 + convertedNum2 + convertedNum3;
}

var paragraph = document.querySelector("p");
var sum = convertNumbers(6, false, "hf");

paragraph.innerHTML = sum;

// Question 5
var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
  var heading = document.querySelector("h1");
  heading.innerHTML += ": Updated";
};

// Question 6
var buttonTitle = document.querySelector(".title");

function changeTitle() {
  document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;

// Question 7
var buttonRed = document.querySelector(".red");
var buttonOrange = document.querySelector(".orange");
var buttonPink = document.querySelector(".pink");

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

buttonRed.onclick = function () {
  changeBackground("red");
};
buttonOrange.onclick = function () {
  changeBackground("orange");
};
buttonPink.onclick = function () {
  changeBackground("pink");
};
