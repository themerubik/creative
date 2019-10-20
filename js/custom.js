/* INDEX
----------------------------------------------------------------------------------------

1. Portfolio js 

2. Smooth scroll to anchor  

3. Navigation js

4. Counterup js   

5. Progress-bar js   

6. Tooltip js  

7. Magnifiq popup js

8. typed js

9. Animation js

-------------------------------------------------------------------------------------- */
(function($) {
	'use strict';
	/*-------------------------------------------------------------------------*
	 *                 1. Portfolio js                                       *
	 *-------------------------------------------------------------------------*/
	$(function() {
		//Initialize filterizr with default options
		$('.filtr-container').filterizr();
	});
	/*-------------------------------------------------------------------------*
	 *                   2. Smooth scroll to anchor                           *
	 *-------------------------------------------------------------------------*/
	$(document).ready(function() {
		//Check to see if the window is top if not then display button
		$(window).scroll(function() {
			if($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
		//Click event to scroll to top
		$('.scrollToTop').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	/*-------------------------------------------------------------------------*
	 *                  3. navbar js                                       *
	 *-------------------------------------------------------------------------*/
	$(document).ready(function() {
		// Add scrollspy to <body>
		$('body').scrollspy({
			target: ".custom_nav",
			offset: 10
		});
		// Add smooth scrolling on all links inside the navbar
		$("#mynavbar a").on('click', function(event) {
			// Make sure this.hash has a value before overriding default behavior
			if(this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function() {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});
	/*-------------------------------------------------------------------------*
	 *                  4. Counterup js                                       *
	 *-------------------------------------------------------------------------*/
	$(document).ready(function() {
		$(".counter").counterUp({
			delay: 10,
			time: 1000
		});
	});
	/*-------------------------------------------------------------------------*
	 *                   5. Progress-bar js                          *
	 *-------------------------------------------------------------------------*/
	$(".skills").each(function() {
		$(this).waypoint(function() {
			var progressBar = $(".progress-bar");
			progressBar.each(function() {
				$(this).css("width", $(this).attr("aria-valuenow") + "%");
			});
		}, {
			triggerOnce: true,
			/*offset: 'bottom-in-view'*/
			offset: '50%'
		});
	});
	/*-------------------------------------------------------------------------*
	 *                  6. Tooltip js                                       *
	 *-------------------------------------------------------------------------*/
	$(document).ready(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
	/* ------------------------------------
	7.  MAGNIFIC POPUP
	------------------------------------ */
	$('#youtube-video').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'http://www.youtube.com/embed/%id%?autoplay=1'
				},
			},
			srcAction: 'iframe_src',
		}
	});
	/*-------------------------------------------------------------------------*
	 *                 8. Typed js                                       *
	 *-------------------------------------------------------------------------*/
	$(document).ready(function() {
		$(".element").typed({
			strings: ["develope your business with us.", "we have awesome features.", "we  make your global identity."],
			typeSpeed: 50,
			loop: true
		});
	});
	/*-------------------------------------------------------------------------*
	 *           9. Animation js                                       *
	 *-------------------------------------------------------------------------*/
	//animation on scroll
	new WOW().init();
})(jQuery);