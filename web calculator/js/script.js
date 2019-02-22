document.getElementById("one").innerHTML = "Hi I am the first one";
document.getElementsByTagName("p")[0].innerHTML = "YEAH";
document.querySelector("div").innerHTML = "yoooooo";
document.querySelector(".class").innerHTML = "time to go babe";

// function clickme(){
// 	alert("YES!");
// };


// function enter(){
// var sum = Number(getElementById("n1").value) + Number(getElementById("n2").value);

// console.log(sum);
// };


function enterNow(){
var n1 = document.getElementById("n1").value;
var n2 = document.getElementById("n2").value;

 var sum = Number(n1) + Number(n2);
 console.log(sum);
};