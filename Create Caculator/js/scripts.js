// Expression Evaluation
function evaluateExpression() {
    try {
        var expression = screen.value.replace(/×/g, '*').replace(/÷/g, '/');
        
        var parts = expression.split(/([\+\-\*\/])/);
        parts = parts.filter(part => part.trim() !== '');

        var result = parseFloat(parts[0]);
        for (var i = 1; i < parts.length; i += 2) {
            var operator = parts[i];
            var operand = parseFloat(parts[i + 1]);
            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    result /= operand;
                    break;
            }
        }

        screen.value = result;
    } catch (error) {
        screen.value = 'Error';
    }
}
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var degreeBtn = document.getElementById('degree-btn');
var radianBtn = document.getElementById('radian-btn');

var isDegree = true; // Default option is Degree

// Event listeners for buttons
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

// Event listener for Degree button
degreeBtn.addEventListener('click', () => {
    isDegree = true;
});

// Event listener for Radian button
radianBtn.addEventListener('click', () => {
    isDegree = false;
});

// Trigonometry functions considering input as degrees or radians
function sin() {
    var value = parseFloat(screen.value);
    if (isDegree) {
        value = value * (Math.PI / 180); // Convert degrees to radians
    }
    screen.value = Math.sin(value);
}

function cos() {
    var value = parseFloat(screen.value);
    if (isDegree) {
        value = value * (Math.PI / 180); // Convert degrees to radians
    }
    screen.value = Math.cos(value);
}

function tan() {
    var value = parseFloat(screen.value);
    if (isDegree) {
        value = value * (Math.PI / 180); // Convert degrees to radians
    }
    screen.value = Math.tan(value);
}

// Logarithmic function
function logarithm() {
    var number = parseFloat(screen.value);
    screen.value = Math.log(number) / Math.log(10); // Compute logarithm base 10
}

function clearScreen() {
    screen.value = '';
}

function pow() {
    screen.value = Math.pow(parseFloat(screen.value), 2);
}

function sqrt() {
    screen.value = Math.sqrt(parseFloat(screen.value));
}

function log() {
    screen.value = Math.log(parseFloat(screen.value));
}

function pi() {
    screen.value = Math.PI.toFixed(10); // Limit to 10 decimal places
}

function e() {
    screen.value = Math.E.toFixed(10); // Limit to 10 decimal places
}

function fact() {
    var num = parseFloat(screen.value);
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    screen.value = result;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}