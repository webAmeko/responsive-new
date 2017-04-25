$(window).scroll(function(){
	if($(window).scrollTop()>150){
		$('.top').fadeIn();
	}
		if($(window).scrollTop()<=100){
			$('.top').fadeOut();
		}
	});




	function GoTop(){
		timer = setInterval("runToTop()",2);
	}

	function runToTop(){
		currentPosition = $(window).scrollTop();
		currentPosition -= 18;

		if(currentPosition>0){
			window.scrollTo(0,currentPosition);
		}

		else{
			window.scrollTo(0,0);
			clearInterval(timer);
		}
}

$(function(){
	$('.top').click(function(){
		GoTop();
	});

});