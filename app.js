
let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === "0") {
        // if the default value display is zero, the next input should display the value inputed
        display.value = value;
    } else {

        // if not, let subsequent inputed values be joined together on display
        display.value += value;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
        result = display.value;
    } catch (error) {
        display.value = "Error";
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = "0";
}