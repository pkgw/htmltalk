/* Convenience glue for rendering PDFs as images.
 * @author Peter Williams
 *
 * <canvas class="pdfimg" width=600 style="width: 50%;" data-href="assets/fig1.pdf">
 * </canvas>
 *
 * The PDF is rendered to match the "canvas width", which is different than the
 * CSS element width. The canvas width should be, say, 600 always; the CSS width
 * should be whatever's needed for the layout.
 *
 * TODO: I have no idea about efficiency, etc., with all this. I think it
 * rerenders the PDF each time the slide is revisited.
 */

PDFJS.disableWorker = true; // otherwise some XSS issue breaks things

var RevealPdfImgs = window.RevealPdfImgs || (function () {
    Reveal.addEventListener ('slidechanged', function (event) {
	var canvases = event.currentSlide.querySelectorAll (".pdfimg");
	for (var i = 0; i < canvases.length; i++) {
	    var canvas = canvases[i];
	    var url = canvas.getAttribute ('data-href');

	    PDFJS.getDocument (url).then (function (pdf) {
		pdf.getPage (1).then (function (page) {
		    var context = canvas.getContext ('2d');
		    var viewport = page.getViewport (canvas.width / page.getViewport(1.0).width);
		    canvas.height = viewport.height;
		    page.render ({canvasContext: context, viewport: viewport});
		});
	    });
	}
    });
})();
