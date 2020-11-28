function mice() {
  var a= document.getElementById("price1").value = 450;
  var b = document.getElementById("mice").value;
  var x = a * b;
  document.getElementById("mice").value = x;
}
function bee() {
  var c= document.getElementById("price2").value = 525;
  var d = document.getElementById("bee").value;
  var y = c * d;
  document.getElementById("bee").value = y;
}
function spider() {
  var e= document.getElementById("price3").value = 750;
  var f = document.getElementById("spider").value;
  var j = e * f;
  document.getElementById("spider").value = j;
}

function total() {
  var g= document.getElementById("mice").value;
  var h = document.getElementById("bee").value;
  var z = document.getElementById("spider").value;
  var x = +g + +h + +z;
  document.getElementById("amountDue").value = x;
}