$(document).ready(function(){

generatePixels();



function generatePixels(){
	for (i=0; i<1200; i++){
	$(".bitProcessor").append("<div class='pixel "+ i +"' style='background-color: black; width: 2%; height: 2%; padding: 1%; float: left;opacity:0.2;'></div>")
	}
	pulsePixels();
};

function pulsePixels(){
	setInterval(function(){
		var randomPixel1 = "."+ Math.floor(Math.random()*1200);
		var randomPixel2 = "."+ Math.floor(Math.random()*1200);
		var randomPixel3 = "."+ Math.floor(Math.random()*1200);
		var randomPixel4 = "."+ Math.floor(Math.random()*1200);
		$(randomPixel1).fadeTo(2000, .9).delay(13000).fadeTo(5000, .2);
		$(randomPixel2).fadeTo(2000, .9).delay(11000).fadeTo(5000, .2);
		$(randomPixel3).fadeTo(2000, .9).delay(9000).fadeTo(5000, .2);
		$(randomPixel4).fadeTo(2000, .9).delay(7000).fadeTo(5000, .2);
	},100)
}


/*
function pulsePixels() {
	setInterval(function(){
		for (var i = 0; i < 100; i++) {
			$(".pixel, " + i).fadeTo(1000,.1).fadeTo(1000, 1).delay(100);
		}
	}, 1000)
};
*/
































});