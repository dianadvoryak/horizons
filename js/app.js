// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// import('~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
// import('~/node_modules/bootstrap/dist/js/bootstrap.min.js')
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
require('../../node_modules/jquery/dist/jquery.min.js')
require('../../node_modules/slick-carousel/slick/slick.min.js')
require('../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')



document.addEventListener('DOMContentLoaded', () => {

  $('.first__carusel').slick({
    autoplay:	true,
    autoplaySpeed: 4000,
  });


  $(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


})
