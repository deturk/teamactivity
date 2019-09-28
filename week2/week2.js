function add() {
    var result = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = result;
}


function provideNum() {
    var getNumber = document.getElementById('numInput').value;
    var giveNumber = document.getElementById("numOutput");

    var intNum = parseInt(getNumber);
    if (intNum) {
        giveNumber.innerHTML = "total:" + sum(intNum);
    }
}

function sum(number) {
    var total = 0;
    for (i = 0; i <= number; i++) {
        total += i;
    }
    return total;
}