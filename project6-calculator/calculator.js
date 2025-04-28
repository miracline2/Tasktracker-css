let firstInput = ""; 
let secondInput = "";
let operation = "";
let isSecondInput = false; 

const handleNumbers = (event) => {
    const inputNumber = event.id;

    if (!isSecondInput) {
        firstInput += inputNumber;
        console.log('First Input:', firstInput);
    } else {
        secondInput += inputNumber;
        console.log('Second Input:', secondInput);
    }
};

const handleoperations = (event) => {
    if (firstInput && secondInput) {
        // If both inputs are ready, calculate immediately
        calculate();
    }

    operation = event.id;
    isSecondInput = true; 
    console.log('Operation selected:', operation);
};

const handleEquvalent = (event) => {
    if (event.id === '=') {
        calculate();
        operation = "";
        isSecondInput = false;
    }
};

const calculate = () => {
    let result = document.getElementById('result');
    let output;

    switch (operation) {
        case '+':
            output = Number(firstInput) + Number(secondInput);
            break;
        case '-':
            output = Number(firstInput) - Number(secondInput);
            break;
        case '*':
            output = Number(firstInput) * Number(secondInput);
            break;
        case '÷': // <--- corrected here
            output = Number(firstInput) / Number(secondInput);
            break;
        default:
            output = Number(firstInput); // If no operation, keep the same
    }

    result.innerHTML = output;

    console.log('Result:', output);

    // After calculation:
    firstInput = output.toString();
    secondInput = "";
};
