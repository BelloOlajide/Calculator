
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

    } 
    
    catch (error) {
        display.value = "Error";
        clearDisplay();
    }
}

function clearDisplay() {
    display.value = "0";
}

// function to remove the last digit from the display slice(0, -1) 0 for starting and -1 for the begining of the end. this specifies the begining of string and tells the system to start slicing from the end

function removeDigitFromInput() {
   display.value = display.value.slice(0, -1);

//    display.value = display.value === '' ? '0' : display.value;

if (display.value === '') {
// if display.value is equivalent to empty, set it to zero
    display.value = "0";

} 

else {
// else let the last digit be the last inputed digit
    display.value = display.value;

}

}