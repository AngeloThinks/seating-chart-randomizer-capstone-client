//shuffle function 

export default function shuffleStudent(arr, options) {

    if (!Array.isArray(arr)) {
      throw new Error('shuffle expect an array as parameter.');
    }
  
    options = options || {};
  
    var collection = arr,
        len = arr.length,
        rng = options.rng || Math.random,
        random,
        temp;
  
    if (options.copy === true) {
      collection = arr.slice();
    }
  
    while (len) {
      random = Math.floor(rng() * len);
      len -= 1;
      temp = collection[len];
      collection[len] = collection[random];
      collection[random] = temp;
    }
  
    return collection;
  };