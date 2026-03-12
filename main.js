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
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4)
filterRange(arr, 1, 4);