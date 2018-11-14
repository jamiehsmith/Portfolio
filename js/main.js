$(document).ready(function() {
	$(".nav-icon").hover(
		function () {
			$(this).addClass("anaglyph");
			$('#home-icon').removeClass("hidden");
		},
		function () {
			$(this).removeClass("anaglyph");
			$('#home-icon').addClass("hidden");
		}
	);
})