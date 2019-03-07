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
		
		$('.customerlist').append('<div class="list">Customer<div class="order"><div class="orderlist"></div><div class="cal"><div class="subtotal"></div><div class="tips"></div><div class="tax"></div><div class="total"></div></div></div></div>');}	
		changeStatu();
		$('.subtotal').html('Subtotal:$0');
		$('.tips').html('Tips:$0');
		$('.tax').html('Tax:$0');
		$('.total').html('Total:$0');
	};

	function changeStatu (){
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
		var subtotal = 0;
		var tips = 0;
		var tax = 0;
		var total = 0;

		$('.item').click(function(){
			var item = $(this).data('item');
			var price = $(this).data('amount');
			var orderdetial = '<li class="orderitem">'+ item +'</li><div class="moneysign">$<div data-price="'+ price +'" class="orderprice">'+ price +'</div></div>';
			$('.orderlist').append(orderdetial); 
			subtotal = (subtotal + price);
			tips = (subtotal * 0.18).toFixed(2);
			tax = (subtotal * 0.085).toFixed(2);
			total = (subtotal + tips + tax);
   			$('.subtotal').html('Subtotal:$' + subtotal);
   			$('.tips').html('Tips:$' + tips);

   			// question part
   			$('.tas').html('Tax:$' + tax);
   			$('.total').html('Total:$' + total);
   			// question part
		});			
	};




	$("#cnumber").keypress(function(event) {
			    if (event.keyCode==13) {
			    	listCreator()
			    	addItem()
			    	$('.add').css('display','none');
			    	$('.guide2').css('display','block');}	
	});
				
	$("#myBtn").click(function(event){ 
			        //send to function
			        listCreator()
			        addItem()
			        $('.add').css('display','none');  
			        $('.guide2').css('display','block');
	});

});



		
// how to get the first val from multiple class with same name
	
	



