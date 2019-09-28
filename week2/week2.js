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

function addUp() {
    var getNumber = document.getElementById('numInput').value;
    var getNumber2 = document.getElementById('numInput2').value;

    var intNum = parseInt(getNumber);
    var intNum2 = parseInt(getNumber2);

    var total = intNum + intNum2;

    document.getElementById("addOutput").innerHTML = total;
}