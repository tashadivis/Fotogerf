<html>
	<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script>
	$(document).ready(function() {
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();
			
			var target = this.hash;
			var $target = $(target);
			
			$('html, body').stop().animate({
				'scrollTop'; $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
	});
	</script>
	</head>