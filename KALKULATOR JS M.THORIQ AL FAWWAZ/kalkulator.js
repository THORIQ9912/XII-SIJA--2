function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '.' && display.value.includes('.')) return;
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;
    
    
    expression = expression.replace(/\^/g, '**');
    
   
    expression = expression.replace(/(\d+)%/g, function(match, p1) {
        return p1 / 100;
    });

    try {
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}