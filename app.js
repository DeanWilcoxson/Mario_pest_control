/* jshint esversion: 6 */
function mouseRemoval(num1, num2) {
    var mouseQuote = num1 * num2;
    return mouseQuote;
}
var mice = document.getElementById("button1").addEventListener("click", function miceRemoval() {
    var num1 = document.getElementById("mice").value;
    var num2 = 450;
    var calc = document.getElementById("total");
    var miceFee = mouseRemoval(num1, num2);
    calc.textContent = miceFee;
});


function beeRemoval(num1, num2) {
    var beeQuote = num1 * num2;
    return beeQuote;
}
var bee = document.getElementById("button2").addEventListener("click", function beeRemoval() {
    var num1 = document.getElementById("bee").value;
    var num2 = 525;
    var calc = document.getElementById("total");
    var beeFee = beeRemoval(num1, num2);
    calc.textContent = beeFee;
});


var spiderQuote = document.getElementById("button3").addEventListener("click", function spiderRemoval() {
    var spider = document.getElementById("spider");
    return spider.value * 750;
});

var totalOwed = document.getElementById("button4").addEventListener("click", function total() {
    var amountDue = document.getElementById("amountDue");
    let x = miceQuote + beeQuote + spiderQuote;
    amountDue.textContent = x;
});