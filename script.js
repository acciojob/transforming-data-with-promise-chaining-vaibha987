// Get references to the input, button, and output div
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function to simulate an asynchronous operation using setTimeout
function asyncOperation(result, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, time);
    });
}

// Function to update the output div with the current result
function updateOutput(result) {
    output.textContent = `Result: ${result}`;
}

// Add the event listener to the button
button.addEventListener('click', () => {
    const number = parseFloat(input.value);

    if (isNaN(number)) {
        output.textContent = "Please enter a valid number";
        return;
    }

    // Start the promise chain
    asyncOperation(number, 2000) // Resolve the input number after 2 seconds
        .then((result) => {
            updateOutput(result);
            return asyncOperation(result * 2, 1000); // Multiply by 2 after 1 second
        })
        .then((result) => {
            updateOutput(result);
            return asyncOperation(result - 3, 1000); // Subtract 3 after 1 second
        })
        .then((result) => {
            updateOutput(result);
            return asyncOperation(result / 2, 1000); // Divide by 2 after 1 second
        })
        .then((result) => {
            updateOutput(result);
            return asyncOperation(result + 10, 1000); // Add 10 after 1 second
        })
        .then((finalResult) => {
            output.textContent = `Final Result: ${finalResult}`; // Display the final result
        })
        .catch((error) => {
            output.textContent = `Error: ${error}`;
        });
});
