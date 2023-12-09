function sortStudent() {
  // Get the student's name from the input field
  const studentName = document.getElementById('studentName').value;

  // Generate a random number between 1 and 4
  const randomNumber = Math.floor(Math.random() * 4) + 1;

  // Use an if-else-if statement to determine the student's house
  if (randomNumber === 1) {
    alert('Welcome to Gryffindor, ' + studentName + '!');
  } else if (randomNumber === 2) {
    alert('Welcome to Hufflepuff, ' + studentName + '!');
  } else if (randomNumber === 3) {
    alert('Welcome to Ravenclaw, ' + studentName + '!');
  } else {
    alert('Welcome to Slytherin, ' + studentName + '!');
  }
}
