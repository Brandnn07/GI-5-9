// EASY: Write a function htat takes in an array of numbers and outputs the average of all the numbers.

var avgNumbers = [1, 4, 7];  //4
var avgNumbers2 = [1.5, 3, 2.5, 1]; //2

function average(input) {
    let total = 0
    for (i = 0; i < input.length; i++) {
        total += input[i] / input.length;
    }
    return total
}
console.log(average(avgNumbers2))

// MEDIUM: Suppose an array sorted in ascending order is roated at some pivot unkown to you before hand. (0124567) might become (4567012)
// You are given a target value to search. If found in the array return its index, otherwise return -1.
// You may assume no dplicate exists in the array.
var numArray = [4, 5, 6, 7, 8, 9];

function checkNumber(array, target) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}

console.log(checkNumber(numArray, 5));

// HARD:
// Create two buttons, one that when clicked turns the background of the body red. The

// other, when clicked, turns the body's background color white. Each of the background colors

// should be defined as class styles and when the buttons are pushed the body's classList is

// updated to include the correct class for the background.

// Create a single function that takes an input
// className
// and updates the body's classList to

// ONLY include that className

// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be

// located in a folder named hard_js.

// window.updateTheBackground = function (className) {
//     if (className === "bg-red") {
//         document.body.className = "bg-red";
//     }
//     else if (className === "bg-white") {
//         document.body.className = "bg-white";
//     }
// }

// *VERY HARD: You are given coins of different denominations and a total amount of money
// amount
// .
// Write a function to compute the fewest number of coins that you need to make up that amount. If that
// amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays
// and logical operators.  Do not have anyone give you the answer or solve this problem for you.

var coinPurse1 = [1, 2, 5];
var coinPurse2 = [];

function coinCounter(purse, amount) {
    let change = purse.sort();
    let tally = 0;
    let holder = 0;

    while (amount) {
        if (amount / change[i] < 1) { //Checks if any number is bigger than amount, it counts a tally
            tally++;
        } else {
            // console.log("here");
            holder = amount + Math.floor(amount / change[i]);
            amount = amount % change[i] //VERY similiar to the pair programming problem (should return one)
            tally++ //increment as long as this is going
        }
        
        if (amount === 0) {
            return tally;
        }

        if (tally === 0) { //If the function above did not increment anything, return -1
            return -1
        }
    }
}

console.log(coinCounter(coinPurse1, 11));
console.log(Math.floor(11 / 2));
console.log(Math.floor(11 % 2));
