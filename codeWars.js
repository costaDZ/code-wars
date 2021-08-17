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


// //=== convert to Hex ======> Number(10).toString(16)
// function convertToHex(num) {
//     if (num === 0) return "00";
//     let result = [];
//     let hexValues =
//         ["0", "1", "2", "3", "4", "5", "6",
//             "7", "8", "9", "A", "B", "C", "D", "E", "F"];
//     while (num > 0) {
//         let reminder = num % 16;
//         result.unshift(hexValues[reminder]);
//         num = Math.floor(num / 16);
//     }
//     if (result.length === 1) result.unshift("0")
//     return result.join('');
// }

// console.log(rgb(5, 104, 4));


//-----------------------------//
// function rgb(...arg) {
//     return arg.map(n => {
//         if (n < 0) n = 0;
//         if (n > 255) n = 255;
//         return ("0" + Number(n).toString(16)).slice(-2)
//     }).join('').toUpperCase()
// }

// console.log(rgb(255, 104, 4));


//===============================================================//
//**Roman Numerals Decoder

// Create a function that takes a Roman numeral as its argument and returns 
// its value as a numeric decimal integer.You don't need to validate 
// the form of the Roman numeral.
// Modern Roman numerals are written by 
// expressing each decimal digit of the number to be encoded separately
// , starting with the leftmost digit and skipping any 0s.
// So 1990 is rendered "MCMXC"(1000 = M, 900 = CM, 90 = XC) and 2008 is rendered 
// "MMVIII"(2000 = MM, 8 = VIII).The Roman numeral for 1666, 
// "MDCLXVI", uses each letter in descending order.

// 1990 --- "MCMXC"(1000 = M, 900 = CM, 90 = XC)
// 2008 --- "MMVIII"(1000 = M, 900 = CM, 90 = XC)
// 1666 --- "MDCLXVI"



// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1, 000





/////solution('XXI'); // should return 21

//===============================================================//


// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// function hashTag(str) {
//     let word = str.split(" ")
//         .filter(w => w.length)
//         .map((w, i) => i === 0 ? "#" + w[0].toUpperCase() + w.slice(1) : w[0].toUpperCase() + w.slice(1))
//         .join("")

//     if (!word.length) return false;
//     return word.length > 140 ? false : word;
// }

// console.log(hashTag(" "));

//===============================================================//

// Pete likes to bake some cakes.He has some recipes and ingredients
// .Unfortunately he is not good in maths.Can you help him to find out,
// how many cakes he could bake considering his recipes ?
// Write a function cakes(), which takes the recipe(object) and the available ingredients(also an object) 
// and returns the maximum number of cakes Pete can bake(integer).For simplicity there are no units
// for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

// function cakes(rec, ing) {
//     let status = [];
//     for (let prop in rec) {
//         let check = prop in ing;
//         if (!check) return 0;
//         let average = Math.floor(ing[prop] / rec[prop]);
//         if (!average) return 0;
//         status.push(average);
//     }
//     return status.sort((a, b) => a - b)[0];
// }

// console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));

// must return 2
//cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// // must return 0
// cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });


//===============================================================//
