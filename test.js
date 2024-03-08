// function capitalizeEveryOtherLetter(str) {
//   return str.split('').map((char, index) => {
//     if (index % 2 === 0) {
//       return char.toUpperCase();
//     } else {
//       return char
//     }
//   }).join('')
// }

// // Example usage:
// console.log(capitalizeEveryOtherLetter("hello world"));




// function example() {
//   let y = 20; // ou const y = 20;
//   if (true) {
//     var x = 30;
//     console.log(y); // 20
//     console.log(x); // 30
//   }
//   console.log(y); // 20
//   console.log(x); // 30
// }

// example()




// String.prototype.isPalindrome = function () {
//   const reversedStr = this.split('').reverse().join('')
//   return reversedStr === this.toString() ? true : false;
// }

// console.log('racecar'.isPalindrome()) //true
// console.log('abba'.isPalindrome())    //true
// console.log('aba'.isPalindrome())     //true
// console.log('abbccba'.isPalindrome()) //false
// console.log('abdccba'.isPalindrome()) //false




// Array.prototype.MyMap = function (callback) {
//   const resultArray = []

//   for (let i = 0; i < this.length; i++) {
//     const mappedValue = callback(this);

//     resultArray.push(mappedValue)
//   }

//   return resultArray
// };

// [1, 2, 3].MyMap(console.log);
// ["a", "b", "c"].MyMap(console.log);




// Array.prototype.flatten = function () {
//   const resultArray = []

//   for (const value of this) {
//     if (Array.isArray(value)) {
//       const flattened = value.flatten();
//       resultArray.push(...flattened)
//     } else {
//       resultArray.push(value)
//     }
//   }
//   return resultArray
// }

// console.log([].flatten());
// console.log([1, 2, 3].flatten())
// console.log([[1, 2], 3, 4].flatten());
// console.log([[1, 2], [3, [4, 5]], 6].flatten());