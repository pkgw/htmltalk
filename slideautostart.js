/* Start a video when its slide is shown.
 * @author Peter Williams
 *
 * Just give the video a class of "slideautostart"
 */

var SlideAutoStart = window.SlideAutoStart || (function () {
    Reveal.addEventListener ('slidechanged', function (event) {
	var vids = event.currentSlide.querySelectorAll (".slideautostart");
	for (var i = 0; i < vids.length; i++) {
	    var vid = vids[i];
	    vid.play ();
	}
    });
})();
