// // EASY: Write a function htat takes in an array of numbers and outputs the average of all the numbers.

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

// // MEDIUM: Suppose an array sorted in ascending order is roated at some pivot unkown to you before hand. (0124567) might become (4567012)
// // You are given a target value to search. If found in the array return its index, otherwise return -1.
// // You may assume no dplicate exists in the array.
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

// The array can be in any order, sort it in descending order to find the least number of coin combinations
// Subtract first number from the total amount (equals 6) and make new amount
// Track that we have used one coin and restart the process by looping through array
// Keep checking to see if the coin is greater than the amount, if so, move to next index
// If amount doesn't reach 0, push out highest number or start at the next index and try the function again
// while(coinPurse1.length >= 0)

function coinCounter(purse, amount) { // Only checks arrays of 3
    let change = purse.sort(function(a, b){return b-a}); // (5, 2, 1)
    let tally = 0;
    let newAmount = 0;
    // let i = 0
     while(change.length > 0) {
         if (newAmount >= 0) {
            newAmount = amount - change[0];
            tally++; // 1
                if (newAmount >= change[0]) {
                    newAmount = newAmount - change[0]; // 1
                    tally++; // 2
                } else {
                    change.shift();
                }
            if (newAmount >= change[0]) {
                newAmount = newAmount - change[0]; 
                tally++; // 3
            } else {
                change.shift();
                // console.log(change); // 2, 1
                if (newAmount >= change[0]) {
                    newAmount = newAmount - change[0]; 
                    tally++;
                } else {
                    change.shift(); // 1
                    if (newAmount >= change[0]) {
                        newAmount = newAmount - change[0]; 
                        tally++;
                        if (newAmount >= change[0]) {
                            newAmount = newAmount - change[0]; 
                            tally++;
                        } else { 
                            change.shift(); // Should be end of array here
                        }
                    } else {
                        change.shift(); // Should end array here too
                    }
                }
            }
            // it's looping here
        } else {
            // the highest number is bigger than the amount, start at next index and try again
            change.shift();
        }
         
    }
    return tally;
}
console.log(coinCounter(coinPurse1, 11));
