
function calculateSumProductAverage() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const num3 = parseFloat(document.getElementById('num3').value);

  const sum = num1 + num2 + num3;
  const product = num1 * num2 * num3;
  const average = sum / 3;

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average}</p>
  `;
  }
