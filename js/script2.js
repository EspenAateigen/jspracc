var drop1Line = " ";

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
