//Complete the method / function so that it converts dash
// underscore delimited words into camel casing.The first
// word within the output should be capitalized only if the original 
//word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).

// function toCamelCase(str) {
//     let strArr = str.split("");
//     let underScoreIndex = [];

//     for (let c in strArr) {
//         if (strArr[c] === '_' || strArr[c] === '-') {
//             underScoreIndex.push(c);
//         }
//     }

//     for (let p of underScoreIndex) {
//         strArr[+p + 1] = strArr[+p + 1].toUpperCase();
//     }

//     return strArr.filter(i => i !== '_' && i !== '-').join("");
// }

// //let strArr = str.split(/-|_/g);

// console.log(toCamelCase('The-Stealth-Warrior'));

//==============================================================//

// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

// function squareSum(arr) {
//     return arr.reduce((acc, val) => acc += (val ** 2), 0)
// }

// console.log(squareSum([2, 2, 2]));


//===============================================================//

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels
//from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string 
//and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL
//!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.


// function removeVowels(str) {

//     let vowels = ['a', 'e', 'l', 'o', 'u'];
//     let lowerStr = str.toLowerCase();

//     let i = 0;
//     let result;
//     while (i < vowels.length) {
//         console.log(i);
//         result = lowerStr.split("").filter(ch => ch !== vowels[i]).join('');

//         i++;

//     }

//     console.log(result);



// }

// console.log(removeVowels('This website is for losers LOL'));



//===============================================================//

// Create a function named divisors / Divisors that takes an integer n > 1 
// and returns an array
// with all of the integer's divisors(except for 1 and the number itself)
// , from smallest to largest.
// If the number is prime return the string '(integer) is prime'.


// function divisor(num) {
//     let results = [];
//     let i = 2;
//     while (i < num) {
//         if (Number.isInteger(num / i)) {
//             results.push(i);
//         }
//         i++;
//     }
//     return !results.length ? num + ' is prime' : results;
// }

// console.log(divisor(28));

//===============================================================//

// Implement the function unique_in_order which takes as 
// argument a sequence and returns a list of items 
// without any elements with the same value 
// next to each other and preserving the original order of elements.

// function unique_in_order(iterable) {
//     let result = [];
//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i] !== iterable[i + 1]) {
//             result.push(iterable[i]);
//         }
//     }
//     return result;
// }

// console.log(unique_in_order('AAAABBBCCDAABBkkkB'));



//===============================================================//


// we get the target num
// keep devide the target / 2
// we get each reminder value and put it in an arr
// if (target < 2) we stop deviding

// function convertToBinary(num) {
//     if (num === 0) return '0';
//     let number = num;
//     let res = [];
//     while (number >= 1) {
//         res.unshift(Math.floor(number % 2));
//         number /= 2;
//     }
//     return res.join('');
// }


// function convertToBinary(num) {

//     if (num > 0) {
//         return convertToBinary(Math.floor(num / 2)) + (num % 2);
//     }
//     return '';
// }

// console.log(convertToBinary(25));


// Implement a function that adds two numbers 
// together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// function addBinary(a, b) {
//     let sum = a + b;
//     return (sum).toString(2);
// }

// console.log(addBinary(1, 2));

//===============================================================//
// Bob is preparing to pass IQ test.The most frequent task 
// in this test is to find out which one of the given numbers differs from the others.
// Bob observed that one number usually differs from the others in evenness.
// Help Bob — to check his answers, he needs a program 
// that among the given numbers finds one that is different in evenness, 
// and return a position of this number.

// !Keep in mind that your task is to help Bob solve a real IQ test, 
// which means indexes of the elements start from 1(not 0)



// function iqTest(numbers) {

//     let myNumbers = numbers.split(' ');
//     let values = {};

//     myNumbers.forEach((e, i) => {
//         let element = Number(e);
//         if (element % 2 === 0) {
//             values.even ? values.even[0] += 1 : values.even = [1, i];
//         } else {
//             values.odd ? values.odd[0] += 1 : values.odd = [1, i];
//         }
//     });

//     for (prop in values) {
//         if (values[prop][0] === 1) {
//             return values[prop][1] + 1;
//         }
//     }
// }

// console.log(iqTest('2 4 6 8 5 10 14'));
// console.log(iqTest('1 2 2'));

/********************/
// function iqTest(numbers) {
//     let odd = [];
//     let even = [];
//     numbers.split(' ').map((e, i) => (e % 2 === 0) ? even.push(i + 1) : odd.push(i + 1));
//     return even.length === 1 ? even[0] : odd[0];
// }

// console.log(iqTest('2 4 6 8 5 10 14'));
// console.log(iqTest('3 3 4 3 9'));

//===============================================================//

// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// function getSum(a, b) {
//     if (a === b) return a;
//     let smallest = a > b ? b : a;
//     let biggest = a < b ? b : a;
//     let result = 0;
//     while (smallest <= biggest) {
//         result += smallest
//         smallest++;
//     }
//     return result;
// }
// console.log(getSum(-4, 1));

//===============================================================//

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 
// below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.
// Also , if a number is negative, return 0(for languages that do have them)


// function solution(number) {
//     if (number <= 2) return 0;
//     let collection = [];
//     for (let i = 2; i < number; i++) {
//         if (i % 3 === 0) collection.push(i);
//         if ((i % 5 === 0) && (!collection.includes(i))) collection.push(i);
//     }
//     return collection.reduce((acc, val) => acc += val, 0)
// }

// console.log(solution(10));

//===============================================================//

/* The rgb function is incomplete.
Complete it so that passing in RGB decimal values will result in a hexadecimal
representation being returned. Valid decimal values for RGB are 0 - 255.
Any values that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long,
the shorthand with 3 will not work here.


Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
*/

// function rgb(...arg) {
//     let result = [];
//     for (n of arg) {
//         if (n < 0) n = 0;
//         if (n > 255) n = 255;
//         result.push(convertToHex(n))
//     }
//     return result.join('')


// }
// function convertToHex(num) {
//     if (num === 0) return "00";
//     let result = [""];
//     let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

//     let i = 0;
//     while (num > 0) {

//         let reminder = num % 16;
//         let targetValue = hexValues[reminder];
//         // console.log(targetValue);
//         if (typeof (result[i]) !== "string") {
//             result[i] = new String();
//         } else {
//             result[i] += targetValue;
//             continue;
//         }
//         // result.unshift(targetValue);
//         // targetValue.length === 1
//         //     ? result.unshift("0" + targetValue)
//         //     : result.unshift(targetValue);

//         num = Math.floor(num / 16);
//         i++;

//     }
//     console.log(result);
//     return result.join('');
// }

// console.log(convertToHex(114));


// console.log(rgb(179, 13, 114));