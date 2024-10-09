// Write a function that takes an array of numbers and returns
// a new array with each number doubled.
// Use the for...of loop to iterate through the array.

function doubleArray(arr) {
  let doubleArray = [];
  for (const element of arr) {
    doubleArray.push(element * 2);
  }
  return doubleArray;
}

const arr = [2, 4, 5, 6];
console.log("Original Array => " + arr);
console.log("Doubled Array => " + doubleArray(arr));
console.log("...........................");

// Write a function that takes an object and princonsole.log("...........................");ts its keys and values
// to the console. Use the for...in loop to iterate through the object properties.

function displayObject(object) {
  console.log("Display object key and value");

  for (const key in object) {
    console.log("key => " + key + "  value => " + object[key]);
  }
  console.log("...........................");
}
const car = {
  maker: "Nissan",
  model: "Nissan Versa",
  year: 2024,
  price: "$18,330",
  transmission: "Auto",
};

displayObject(car);
// Write a function that takes an array of strings and prints each string to the console
// with a delay of 1 second between each print. Use setTimeout() to achieve the delay.

function displayString(arr) {
  console.log("Display string with delay");
  let i = 1;
  for (const element of arr) {
    setTimeout(() => console.log(element), i * 1000);
    i++;
  }
  console.log("...........................");
}
const stringArray = ["Mohammed", "Ahmed", "Musa", "Ibrahim"];
displayString(stringArray);
