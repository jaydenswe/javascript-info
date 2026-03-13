// First exercise: Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. That is: removes all dashes, each word after dash becomes uppercased.
function camelize(str) {
  let removeDashes = str.split("-");
  const capitaliseFirstLetters = removeDashes.map((word, index) => {
    if (index === 0)
      return word;
    else {
      return word[0].toUpperCase() + word.substring(1)
    }
  }
)
  const newStr = capitaliseFirstLetters.join('')
  return newStr;
}

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. The function should not modify the array. It should return the new array.
function filterRange(arr, a, b) {
  const filteredArray = arr.filter((num) => {
      if (num >= a && num <= b) {
        return num
      }
    }) 
  return filteredArray
}

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b. The function should only modify the array. It should not return anything.
function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
    }
    else {
      return
    }
  }
}

// Sort an array in decreasing order
function sortByDecreasingOrder(arr) {
  const sort = arr.sort((a, b) => b - a)
  return sort;
}
