/**
 * Returns format output of array
 * @constructor
 * @param {object} arr Input array
 * @param {number} n Number of elements in the array
 * @returns {string} format string of input array
 */

'use strict';

function format(arr, n) {
  let localMax = "";

  const pureAssoc = (key, value, object) => ({
    ...object,
    [key]: value
  });

  let res = [];
  for(let i = 0; i < n; i++) {
    for(let j = i; j < arr.length; j+=n) {
      if (String(arr[j]).length > localMax.length) { 
        localMax = String(arr[j]); 
      }
    }
    for(let j = i; j < arr.length; j+=n) {
      res[j] = pureAssoc(j, ' '.repeat(localMax.length - String(arr[j]).length) + arr[j], arr)[j];
    }
    localMax = "";
  }

  let result = "";
  for(let i = 0; i < res.length; i += n) {
    result += (res.slice(i, i+n).join(" ") + "\n");
  }
  return (result.slice(0, result.length-1));
}