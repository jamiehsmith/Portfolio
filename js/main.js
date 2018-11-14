$(document).ready(function() {
	$(".nav-icon").hover(
		function () {
			console.log($(this).attr('id'))
			$(this).addClass("anaglyph");
			$('#' + $(this).attr('id') + "-text").removeClass("hidden");
		},
		function () {
			$(this).removeClass("anaglyph");
			$('#' + $(this).attr('id') + "-text").addClass("hidden");
		}
	);
	$(".nav-icon-sm").hover(
		function () {
			console.log($(this).attr('id'))
			$(this).addClass("anaglyph");
		},
		function () {
			$(this).removeClass("anaglyph");
		}
	);
})