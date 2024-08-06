function formatTime (i) {
  if (i < 10) { i = '0' + i }
  return i
}

function clockMain () {
  const clockDisplay = document.getElementById('clock-display')

  const today = new Date()
  const h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()

  const checkTime = h <= 12 ? 'am' : 'pm'

  const hr = h > 12 ? h - 12 : h // 12 hr time

  m = formatTime(m)
  s = formatTime(s)

  clockDisplay.innerHTML = hr + ':' + m + ':' + s + ' ' + checkTime

  setTimeout(clockMain, 1000) // calls itself every second to update clock
}

export default clockMain
