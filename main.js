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
