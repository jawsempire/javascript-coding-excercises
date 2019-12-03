// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
	let letters = str.split('');
	let temp = '';
	for (let l in letters) {
		temp = letters[l] + temp;
	}
	return temp;
}

function reverse3(str) {
	debugger;
       return str.split('').reverse().join('');       
	
}

reverse('how know');

function reverse2(str) {
	//let temp = str.split('');
	let revIt = '';
	for (let i = str.length-1; i >= 0; i--) {
		revIt += str[i];
	}
	return revIt;
}

module.exports = reverse;
