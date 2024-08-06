function randomColorMain () {
  const button = document.getElementById('random-color-button')
  const randomColorApp = document.getElementById('random-color')
  const colorHexCode = document.getElementById('color-display')
  button.addEventListener('click', () => {
    // Random Hex Color Generator
    const n = (Math.random() * 0xfffff * 1000000).toString(16)
    const hexCode = '#' + n.slice(0, 6)
    randomColorApp.style.backgroundColor = hexCode
    colorHexCode.innerHTML = hexCode
  })
}

export default randomColorMain
