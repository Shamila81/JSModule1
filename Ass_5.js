function checkLeapYear() {
  const yearInput = document.getElementById('yearInput');
  const year = parseInt(yearInput.value);

  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      document.getElementById('leapResult').innerHTML = 'Not a leap year';
    } else {
      document.getElementById('leapResult').innerHTML = 'Leap year';
    }
  } else {
    document.getElementById('leapResult').innerHTML = 'Not a leap year';
  }
}
