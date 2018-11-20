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
	$(".nav-text").hover(
		function () {
			var text_id = $(this).attr('id');
			$('#' + text_id.substring(0, text_id.length-5)).addClass("anaglyph");
			$(this).removeClass("hidden");
			// $('#' + $(this).attr('id') + "-text").removeClass("hidden");
		},
		function () {
			var text_id = $(this).attr('id');
			$(this).addClass("hidden");
			$('#' + text_id.substring(0, text_id.length-5)).removeClass("anaglyph");
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