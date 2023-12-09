function calculateSquareRoot() {
    if (confirm('Should I calculate the square root?')) {
        var number = prompt('Enter the number:');
        if (!isNaN(number)) {
            if (number < 0) {
                document.getElementById('squareRootResult').innerHTML = 'The square root of a negative number is not defined';
            } else {
                var squareRoot = Math.sqrt(number);
                document.getElementById('squareRootResult').innerHTML = 'The square root of ' + number + ' is ' + squareRoot;
            }
        } else {
            document.getElementById('squareRootResult').innerHTML = 'Invalid number entered';
        }
    } else {
        document.getElementById('squareRootResult').innerHTML = 'The square root is not calculated';
    }
}