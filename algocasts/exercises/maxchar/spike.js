

function addtoObj() {
  let collection = {};

  const testerarr = ['weight', 'height']

  //for going through every item of an array
  //for-of => strings / arrays
  for (let char of testerarr){
    //collection[char] gets property value,
    //but also checks if that key exists

    // ** BINARY APPROACH **
    // collection[char] = collection[char] + 1 || 1;

    // ** TERNARY APPROACH **
    // collection[char] ? 'exists' :  (char === 'weight' ? collection[char] = 300 : collection[char] = '6\'3'    );

    if (char === 'weight') collection[char] = 300;
    if (char === 'height') collection[char] = '6\'3'

  }

  return collection;
}

addtoObj();
