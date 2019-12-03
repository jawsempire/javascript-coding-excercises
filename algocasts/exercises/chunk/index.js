// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk2(array, size) {
  let chunkArr = []

//CALC num of sub arrays (number of times to run the oper)
  let numSubArrays = Math.round(array.length / size);
  while (numSubArrays > 0) {
   subarray = array.splice(0, size)
   chunkArr.push(subarray);
   numSubArrays--
 }

//check if anything is left in array; make its own subarray
if (array.length > 0) {
  chunkArr.push(array)
}

  return chunkArr;
}

// console.log(chunk([1,2,3,4,5], 10))


function chunk3(array, size) {
  let chunked = []; // use const

  for(let item of array){
    //retrieve the last element in chunked
    lastEl = chunked[chunked.length-1]
    //check if last el does not exist OR its length is equal to size
    //does not exist ===> !lastEl
    if (typeof lastEl == 'undefined' || lastEl.length === size) {
      // let chunk = [item]
      // chunked.push(chunk);
      chunked.push([item]);
    } else {
        //add the current el into the chunk; have a chunk but it's not full
        lastEl.push(item);
    }

  }

  return chunked;

}

 console.log(chunk([1,2,3,4,5,8,9,10], 3))

module.exports = chunk;
