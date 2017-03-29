$(document).ready(function() {
	
var createPoint = function() {
	var pointNumber = prompt('entrer le nombre de points souhaités');
	for (var i = 0; i < pointNumber; i++) {
		$('<div class="debris"></div>').appendTo('#jeu');
		}
	}

createPoint();
var aleaPoints = function () {
	$('.debris').each(function() {
		$(this).css({
			top : Math.random()* 490,
			left : Math.random()* 490,
		});
	});



}
aleaPoints();

});

//Math.round(Math.random($('#jeu').appendTo()*500));