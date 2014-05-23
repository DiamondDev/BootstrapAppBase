var touchListen = false;
var isHorizontal = false;
var originalPos = {x: 0, y: 0};

function toggleNav() {
	$(".slide-element").toggleClass("active");
}

function init(){
	window.scrollTo(0, 1);
}

$(document).ready(init);

$(".navbar-toggle").click(toggleNav);

$('.body, .navbar').on("touchstart",function(evt){

	originalPos.x = evt.originalEvent.changedTouches[0].clientX;
	originalPos.y = evt.originalEvent.changedTouches[0].clientY;
});
$('.body, .navbar').on("touchmove",function(evt){


	if(!touchListen){
		touchListen = true;
		var moveX = Math.abs(originalPos.x - evt.originalEvent.changedTouches[0].clientX);
		var moveY =  Math.abs(originalPos.y - evt.originalEvent.changedTouches[0].clientY);

		if(moveX > moveY){
			isHorizontal = true;
		}
	}
	if(isHorizontal){
		evt.preventDefault();
		var diff = evt.originalEvent.changedTouches[0].clientX- originalPos.x;

		if(diff < 0) diff = 0;
		$(".slide-element").css("left",diff);
	}

});
$('.body, .navbar').on("touchend",function(evt){

if(!touchListen) return;


	if(isHorizontal){
		$(".slide-element").attr("style",false);
		isHorizontal = false;
		var diff = evt.originalEvent.changedTouches[0].clientX- originalPos.x;

		if(diff > 150){
			$(".slide-element").addClass("active");


		} else {
			$(".slide-element").removeClass("active");

		}


	}
	touchListen = false;
})
