$(document).ready(function() {
	$(".nav-icon").hover(
		function () {
			$(this).addClass("anaglyph");
			$('#' + $(this).attr('id') + "-text").removeClass("hidden");
		},
		function () {
			$(this).removeClass("anaglyph");
			$('#' + $(this).attr('id') + "-text").addClass("hidden");
		}
	);
	$("#JS-icon").hover(
		function () {
			$(this).addClass("anaglyph");
		},
		function () {
			$(this).removeClass("anaglyph");
		}
	);
	$(".nav-icon-sm").hover(
		function () {
			$(this).addClass("anaglyph");
		},
		function () {
			$(this).removeClass("anaglyph");
		}
	);
})