$(document).ready(function() {



	$(".item").brazzersCarousel();
	


	$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});












	/*$(".section-5").waypoint(function() {
	$(".section-5 .tc-item").each(function(index) {
		var ths = $(this);
		setTimeout(function() {
			var myAnimation = new DrawFillSVG({
				elementId: "tc-svg" + index
			});
			ths.children(".tc-content").addClass("tc-content-on");
		}, 500*index);
	});
	}, {
		offset : "20%"
	}); */

	


	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
