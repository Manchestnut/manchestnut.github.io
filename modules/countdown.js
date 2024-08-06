const countdownDisplay = document.getElementById('countdown-display')

const startCountdown = document.getElementById('countdown-button')

function countdown () {
  const dateInput = document.getElementById('input-date')
  const date = dateInput.value

  if(!date) {
    countdownDisplay.innerHTML = "<p class='warning'>Please indicate a date</p>"
    return;
  }
  
  const dateTime = new Date(date + ' 00: 00: 00')
  const now = new Date().getTime()
  const distance = dateTime - now

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  countdownDisplay.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

  if (distance < 0) {
    countdownDisplay.innerHTML = 'Expired'
  }
  setTimeout(countdown, 1000)
}

function countdownMain () {
  startCountdown.addEventListener('click', countdown)
}

export default countdownMain
