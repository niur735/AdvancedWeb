$(function() {

		var empty = true;
		$("input").each(function(){
		   if($(this).val()!=""){
		      empty = false;
		      return false;
		    }
		 });


	function listCreator (){
		let number = $('#cnumber').val();
		for (var i = 0; i < number; i++) {
				//add form elenents
		
		$('.customerlist').append('<div class="list">Customer<div class="order"></div><div class="check">Check</div></div>');}	

		var clicked = false;

		$('.order').click(function(){
 			 if (clicked == false) {
 			 $(this).addClass('background');
 			 clicked = true; }
 			 
 			 else{
 			 $(this).removeClass('background');
 			 clicked = false;}
 			 });
	};

	function addItem (){
		$('.item').click(function(){
			let item = $(this).data('item');
			let price = $(this).data('amount');
			var orderdetial = '<li class="orderitem">'+ item +'</li><div class="moneysign">$<div value="'+ price +'" class="orderprice">'+ price +'</div></div>';
			$('.background').append(orderdetial); 
		});

		$('.check').click(function(){
			var price = $('.orderprice').val();
			alert(price);
// how to get the first val from multiple class with same name?

		});
	};
	
	$("#cnumber").keypress(function(event) {
			    if (event.keyCode==13) {
			    	listCreator()
			    	addItem()
			    	$('.add').css('display','none');}	
	});
				
	$("#myBtn").click(function(event){ 
			        //send to function
			        listCreator()
			        addItem()
			        $('.add').css('display','none');    
	});
});


