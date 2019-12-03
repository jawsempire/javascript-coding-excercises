// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//  function maxChar(str) {
//   let collection = {};
//
//   //for going through every item of an array
//   //for-of => strings / arrays
//   for (let char of str){
//     //collection[char] gets property value,
//     //but also checks if that key exists
//
//     // ** BINARY APPROACH **
//     // collection[char] = collection[char] + 1 || 1;
//
//     // ** TERNARY APPROACH **
//     collection[char] ? collection[char] += 1 :  collection[char] = 1;
//   }
//
//   let max = 0;
//   let maxChar = '';
//
//   //For going through every item in an object
//   //for-in => objects
//     for (let char in collection){
//       //collection[char] => gets the property value!
//       //"the value at index char"
//       if (collection[char] > max) {
//         maxChar = char;
//         max = collection[char];
//       }
//     }
//     return maxChar;
// }


function maxChar(str) {
  let obj = {}

  for (let char of str) {
    // obj[char] = obj[char] + 1 || 1;


    if (obj[char]){
      obj[char] +=1;
    } else {
      obj[char] = 1;
    }
  }

  let max = 0;
  let maxChar = '';

  for (let item in obj) {
    if (obj[item] > max) {
      maxChar = item;
      max = obj[item];
    }
  }
  return maxChar;
}

// maxChar('howdy holla');

module.exports = maxChar;

// ** NOTES **
// function maxChar(str) {
//   let collection = {};
//   for (let char of str){
//     collection[char] = collection[char] + 1 || 1;
//   }
//
//   let keys = Object.values(collection)
//   keys.sort((a, b) => {
//     return collection[b] - collection[a];
//   });
//
//     return keys[0];
//
//
// }
