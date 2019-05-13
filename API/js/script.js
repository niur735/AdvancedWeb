  // create map with Google map API
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
     });

    var geocoder = new google.maps.Geocoder();
// search on map(re center) after click
	$('#submit').click(function(){
// call function
		geocodeAddress(geocoder, map);
	});
}

// define function
	function geocodeAddress(geocoder, resultsMap) {

        var address =$('#address').val();

        geocoder.geocode({'address': address}, function(results, status) {
// make sure the address is on the list
          if (status === 'OK') {

// re center 
            resultsMap.setCenter(results[0].geometry.location);
// create new map
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

// find geocode
	var center_url = "https://maps.googleapis.com/maps/api/geocode/json?address=62+5th+Ave,+New+York,+NY&key=AIzaSyDmQp1baXn7a-azuurL8xX2lCxz70Bc4CQ";

// zoom function

	$('.zoom').click(function(){
	var number = $('select.single').val();
	map.setZoom(Number(number));
	
	});

// https://developers.google.com/maps/documentation/geocoding/intro

	



