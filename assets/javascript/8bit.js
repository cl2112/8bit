$(document).ready(function(){

generatePixels();


function generatePixels(){
	for (i=0; i<200; i++){
	$(".8bitProcessor").append("<div class='pixel "+ i +"' style='background-color: rgba(255,0,255,1); width: 4%; height: 4%; padding: 2%; float: left'></div>")
	}
	pulsePixels();
	pulsePixels();
};

function pulsePixels1() {
	$(".pixel").each(function (i) {
    // store the item around for use in the 'timeout' function
    var $item = $(this); 
    // execute this function sometime later:
    setTimeout(function() { 
      $item.fadeTo(500, .1).delay(500).fadeTo(500, 1);
    }, 50*i);
    // each element should animate half a second after the last one.
  });
	pulsePixels2();
};

function pulsePixels2() {
	$(".pixel").each(function (i) {
    // store the item around for use in the 'timeout' function
    var $item = $(this); 
    // execute this function sometime later:
    setTimeout(function() { 
      $item.fadeTo(500, .1).delay(500).fadeTo(500, 1);
    }, 50*i);
    // each element should animate half a second after the last one.
  });
	pulsePixels1();
};

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