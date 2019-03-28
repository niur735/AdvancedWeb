function cal(){

	var num1 = document.getElementsByClassName('n1')[0].value;
var num2 = document.getElementsByClassName('n2')[0].value;

var x = document.getElementById("mySelect");
  var i = x.selectedIndex;
   var y = x.options[i].value;

if(y =='add'){var result = Number(num1) + Number(num2);  $('.out').html(result);}
else if(y =='sub'){var result =Number(num1) - Number(num2);  $('.out').html(result);}
else if(y =='mul'){var result = Number(num1) * Number(num2);  $('.out').html(result);}
else {var result = Number(num1) / Number(num2);  $('.out').html(result);}

};

$('.cal').click(function(){
	cal();
    });

$(".n2").keypress(function(event) {
			    if (event.keyCode==13) {
			    	cal();}	
	});
