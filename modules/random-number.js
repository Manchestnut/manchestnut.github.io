function randomNumberMain () {
  const maxNum = document.getElementById('max-number')
  const minNum = document.getElementById('min-number')
  const button = document.getElementById('random-number-button')
  const numberDisplay = document.getElementById('number-display')

  button.addEventListener('click', () => {
    // Round up min value
    const minCeiled = Math.ceil(minNum.value)
    // Round down max value
    const maxFloored = Math.floor(maxNum.value)
    // Get random integer between two values
    const randomNum = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    numberDisplay.innerHTML = randomNum
  })
}

export default randomNumberMain
