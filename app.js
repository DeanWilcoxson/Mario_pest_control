/* jshint esversion: 6 */
//Mice Calculation
function mouseRemoval(num1, num2) {
    var mouseQuote = num1 * num2;
    return (mouseQuote);
}
var mice = document.getElementById("button1");
mice.addEventListener("click", function miceRemoval() {
    var miceNum = document.getElementById("mice").value;
    var micePrice = 450;
    var calc = document.getElementById("mice");
    var miceFee = mouseRemoval(miceNum, micePrice);
    calc.value = miceFee;
});

//Bee Calculation
function beeRemoval(num1, num2) {
    var beeQuote = num1 * num2;
    return (beeQuote);
}
var bee = document.getElementById("button2");
bee.addEventListener("click", function beeRemoval() {
    var beeNum = document.getElementById("bee").value;
    var beePrice = 525;
    var calc = document.getElementById("bee");
    var beeFee = beeRemoval(beeNum, beePrice);
    calc.value = beeFee;
});

//Spider Calculation
function spiderRemoval(num1, num2) {
    var spiderQuote = num1 * num2;
    return (spiderQuote);
}
var spider = document.getElementById("button3");
spider.addEventListener("click", function spiderRemoval() {
    var num1 = document.getElementById("spider").value;
    var num2 = 750;
    var calc = document.getElementById("spider");
    var spiderFee = mouseRemoval(num1, num2);
    calc.value = spiderFee;
});

//Total Calculation
function total(num1, num2, num3) {
    var totalDue = +num1 + +num2 + +num3;
    return (totalDue);
}
var totalOwed = document.getElementById("button4").addEventListener("click", function total() {
    var amountDue = document.getElementById("amountDue");
    var x = total(miceFee, beeFee, spiderFee);
    amountDue.value = x;
});