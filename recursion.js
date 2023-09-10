/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1; // Base case: the product of an empty array is 1
    
    return nums[0] * product(nums.slice(1)); // Recursive case: multiply the first number with the product of the rest of the array
  
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0; // Base case: no words, so length is 0
    
    const firstWordLength = words[0].length;
    const restWordsLength = longest(words.slice(1));
    return firstWordLength > restWordsLength ? firstWordLength : restWordsLength;
  
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) return str; // Base case: if the string has 1 or 0 characters, return it as is
  return str[0] + everyOther(str.slice(2)); // Include the first character and recursively skip the next one
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true; // Base case: a string with 1 or 0 characters is a palindrome
    
  if (str[0] !== str[str.length - 1]) return false; // Base case: the first and last characters don't match, so it's not a palindrome
    
  return isPalindrome(str.slice(1, -1)); // Recursive case: check the substring without the first and last characters
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  function findIndexHelper(arr, val, index) {
    if (index === arr.length) {
      return -1; // Base case: reached the end of the array without finding the value
    } else if (arr[index] === val) {
      return index; // Base case: found the value, return its index
    } else {
      // Recursive case: continue searching in the rest of the array
      return findIndexHelper(arr, val, index + 1);
    }
  }

  return findIndexHelper(arr, val, 0); // Start the search with index = 0
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") return ""; // Base case: an empty string remains empty when reversed
  return revString(str.slice(1)) + str[0]; // Reverse the rest of the string and append the first character
}


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key])); // Recursively gather strings from nested objects
    }
  }

  return result;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function binarySearchHelper(arr, val, left, right) {
      if (left > right)  return -1; // Base case: value not found
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === val) return mid; // Base case: value found at the middle index
      if (arr[mid] < val) return binarySearchHelper(arr, val, mid + 1, right); // Recursively search the right half
      return binarySearchHelper(arr, val, left, mid - 1); // Recursively search the left half
  }
  return binarySearchHelper(arr, val, 0, arr.length - 1); // Initial call with left and right bounds
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
