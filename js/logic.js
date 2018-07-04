
// Google API Key =  AIzaSyDqtjHGe9g-I7fB4wZmRmEdIIde3Mrouxo
function initMap() {
	var options = {
		zoom: 8,
		center: {lat: 29.76328, lng:-95.36327}
	}
	
	var map = new google.maps.Map(document.getElementById('map'), options)
	
	const serviceArea = [
		{lat: 29.035821, lng: -95.275498},
		{lat: 29.780502, lng: -95.953527},
		{lat: 30.364618, lng: -95.542913},
		{lat: 30.407936, lng: -95.264307},
		{lat: 29.819916, lng: -94.899012},
		{lat: 29.360535, lng: -94.850775},
		{lat: 29.035821, lng: -95.275498}
	];
	
	
	
	const beaumont = [
		{lat: 30.099893, lng: -94.251885},
		{lat: 30.187774, lng: -94.146828},
		{lat: 30.024717, lng: -93.971390},
		{lat: 29.965844, lng: -93.823075},
		{lat: 29.789015, lng: -93.960061},
		{lat: 30.099893, lng: -94.251885}
	];
	
	const collegeStation = [
	
		{lat: 30.593193, lng: -96.430804},
		{lat: 30.716486, lng: -96.373126},
		{lat: 30.651493, lng: -96.227204},
		{lat: 30.544483, lng: -96.258756},
		{lat: 30.544483, lng: -96.427465},
		{lat: 30.593193, lng: -96.430804}
	];
	
	let polygon = new google.maps.Polygon({
	          paths: serviceArea,
	          strokeColor: '#FF0000',
	          strokeOpacity: 0.4,
	          strokeWeight: 2,
	          fillColor: '#FF0000',
	          fillOpacity: 0.1
	        });
	        polygon.setMap(map);
	
	polygon = new google.maps.Polygon({
	          paths: beaumont,
	          strokeColor: '#FF0000',
	          strokeOpacity: 0.4,
	          strokeWeight: 2,
	          fillColor: '#FF0000',
	          fillOpacity: 0.1
	        });
	        polygon.setMap(map);
			
	polygon = new google.maps.Polygon({
	          paths: collegeStation,
	          strokeColor: '#FF0000',
	          strokeOpacity: 0.4,
	          strokeWeight: 2,
	          fillColor: '#FF0000',
	          fillOpacity: 0.1
	        });
	        polygon.setMap(map);
}

const logo = document.querySelector('#antigenLogo');

$(document).on("scroll", function(){
if ($(document).scrollTop() > 100) {
	$(".top-bar-right a").addClass("shrink");
	$('.bg').addClass('show');
	$("#antigenLogo").height(28);
} else {
	$(".top-bar-right a").removeClass("shrink");
	$('.bg').removeClass('show');
	$("#antigenLogo").height(54);	
}
});













