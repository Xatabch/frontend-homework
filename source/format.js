'use strict';

/**
 * Returns format output of array
 * @constructor
 * @param {object} arr Input array
 * @param {number} n Number of elements in the array
 * @returns {string} format string of input array
 */


function format(arr, n) {

  if(typeof(n) !== "number") {
    return "";
  }
  if(!Array.isArray(arr)) {
  	return "";
  }

  let localMax = "";
  let res = [...arr];

  [...Array(n)].forEach((_,i) => {
    for(let j = i; j < res.length; j+=n) {
      if (String(res[j]).length > localMax.length) { 
        localMax = String(res[j]); 
      }
    }
    for(let j = i; j < res.length; j+=n) {
      res[j] = ' '.repeat(localMax.length - String(res[j]).length) + res[j];
    }
    localMax = "";
  })

  let result = "";
  for(let i = 0; i < res.length; i += n) {
    result += (res.slice(i, i+n).join(" ") + "\n");
  }
  return (result.slice(0, result.length-1));
}