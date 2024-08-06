const reversedString = document.getElementById('string-display')
const button = document.getElementById('reverse-button')

function reverseStringMain () {
  button.addEventListener('click', () => {
    const inputText = document.getElementById('input-string')
    const text = inputText.value
    if(!text){
      reversedString.innerHTML = "<p class='warning'>Please input a string</p>"
      return;
    }
    reversedString.innerHTML = text.split('').reverse().join('')
  })
}

export default reverseStringMain

// .split('') breaks down strings into an array of substrings
// using a reference point as a separator

// .reverse() reverses an array

// .join('') joins elements in array into a string
// the default separator is a comma
