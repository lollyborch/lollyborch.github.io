$(document).ready(function ()
{

		var terms1 = ["graphic design", "web design", "tea drinking", "publication design", "kitten taming", "typography", "sewing", "illustration", "social media wrangling"];
		var terms2 = ["lettering.", "blogging.", "knitting.", "crochet."];

		function rotateTerm() {
		  var ct = $("#rotate").data("term") || 0;
		  $("#rotate").data("term", ct == terms1.length -1 ? 0 : ct + 1).text(terms1[ct]).fadeIn()
		              .delay(4000).fadeOut(400, rotateTerm);
		    var ct = $("#rotate2").data("term") || 0;
		  $("#rotate2").data("term", ct == terms2.length -1 ? 0 : ct + 1).text(terms2[ct]).fadeIn()
		              .delay(4000).fadeOut(400, rotateTerm);
		}
		$(rotateTerm);

});

//Random image jQuery adapted from https://gist.github.com/sosweetcreative/8266351//

var images = ['about-image2.png', 'about-image3.png'];

$('<img class="fade-in img-responsive center-block" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#aboutpic');




	   