$(function() {

		var subtotal;
		var tips;
		var tax;
		var total;
		var item;
		var price;
		var orderdetial;



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
 			 clicked = true; 
 			 addItem();}
 			 
 			 else{
 			 $('.order').removeClass('background');
 			 clicked = false;}
 			 });
	};	
		
	
	function addItem (){
		 subtotal = 0;
		 tips = 0;
		 tax = 0;
		 total = 0;
		 item = '<div></div>';
		 price = '<div></div>';
		 orderdetial = '<div></div>';

		// $('.item').click(function(){
		// 	var item = $(this).data('item');
		// 	var price = $(this).data('amount');
		// 	var orderdetial = '<li class="orderitem">'+ item +'</li><div class="moneysign">$<div data-price="'+ price +'" class="orderprice">'+ price +'</div></div>';
			
		// 	$('.background').prepend(orderdetial); 

		// 	subtotal = (subtotal + price);
		// 	tips = (subtotal * 0.18).toFixed(2);
		// 	tax = (subtotal * 0.085).toFixed(2);
		// 	total = (Number(subtotal) + Number(tips) + Number(tax));

  //  			$('.background').find('.subtotal').html('Subtotal:$' + subtotal);
  //  			$('.background').find('.tips').html('Tips:$' + tips);
  //  			$('.background').find('.tax').html('Tax:$' + tax);
  //  			$('.background').find('.total').html('Total:$' + total);

		// });			
	};

$('.item').click(function(){
			var item = $(this).data('item');
			var price = $(this).data('amount');
			var orderdetial = '<li class="orderitem">'+ item +'</li><div class="moneysign">$<div data-price="'+ price +'" class="orderprice">'+ price +'</div></div>';
			
			$('.background').prepend(orderdetial); 

			subtotal = (subtotal + price);
			tips = (subtotal * 0.18).toFixed(2);
			tax = (subtotal * 0.085).toFixed(2);
			total = (Number(subtotal) + Number(tips) + Number(tax));

   			$('.background').find('.subtotal').html('Subtotal:$' + subtotal);
   			$('.background').find('.tips').html('Tips:$' + tips);
   			$('.background').find('.tax').html('Tax:$' + tax);
   			$('.background').find('.total').html('Total:$' + total);

		});	



	$("#cnumber").keypress(function(event) {
			    if (event.keyCode==13) {
			    	listCreator()
			 
			    	$('.add').css('display','none');
			    	$('.guide2').css('display','block');}	
	});
				
	$("#myBtn").click(function(event){ 
			        //send to function
			        listCreator()
			
			        $('.add').css('display','none');  
			        $('.guide2').css('display','block');
	});

});



		
// how to get the first val from multiple class with same name
	
	



