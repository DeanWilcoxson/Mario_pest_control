var mice = document.getElementById("mice");
var bee = document.getElementById("bee");
var spider = document.getElementById("spider");
var miceQuote = document.getElementById("button1").addEventListener("click", function miceRemoval() {
    return mice.value * 450;
});
<<<<<<< HEAD
var beeQuote = document.getElementById("button2").addEventListener("click", function beeRemoval() {
=======
var beeQuote = document.getElementById("button1").addEventListener("click", function beeRemoval() {
>>>>>>> af5341cba1062f1063c6fcd97e735f58c8f84ab3
    return bee.value * 525;
});
var spiderQuote = document.getElementById("button3").addEventListener("click", function spiderRemoval() {
    return spider.value * 750;
});
var totalOwed = document.getElementById("").addEventListener("click", function total(mice, bee, spider) {
    return mice.miceRemoval() + bee.beeRemoval() + spider.spiderRemoval();
});