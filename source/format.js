/**
 * Format output of array
 * @constructor
 * @param {object} arr - Input array
 * @param {number} n - Number of elements in the array
 */

'use strict';

function format(arr, n) {
  let localMax = "";
    
  for(let i = 0; i < n; i++) {
    for(let j = i; j < arr.length; j+=n) {
      if (String(arr[j]).length > localMax.length) { 
        localMax = String(arr[j]); 
      }
    }
    for(let j = i; j < arr.length; j+=n) {
      arr[j] = new Array(localMax.length - String(arr[j]).length + 1).join(" ") + arr[j];
    }
    localMax = "";
  }

  let result = "";
  for(let i = 0; i < arr.length; i += n) {
    result += (arr.slice(i, i+n).join(" ") + "\n");
  }
  return (result.slice(0, result.length-1));
}