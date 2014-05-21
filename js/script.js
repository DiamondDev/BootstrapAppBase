function toggleNav() {
	$(".slide-element").toggleClass("active");
}

function init(){
	window.scrollTo(0, 1);
}

$(document).ready(init);

$(".navbar-toggle").click(toggleNav);
