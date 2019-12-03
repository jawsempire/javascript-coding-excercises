// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  let rev;

if (Math.sign(n) === 1) {
  rev = n.toString().split('').reverse().join('');
    return parseInt(rev);
} else if (Math.sign(n) === -1)  {
    n = Math.abs(n);
    rev = n.toString().split('').reverse().join('');
    parseInt(rev);
    return -Math.abs(rev);
} else {
  return n;
}
}


module.exports = reverseInt;
