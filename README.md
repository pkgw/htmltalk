# An HTML5 Astrophysics Talk

I recently had my last straw dealing with
[LibreOffice](http://libreoffice.org/) and decided to try to take the plunge
and make a scientific presentation using HTML5 and JavaScript. I was very
happy with how things went, so I thought I'd share how I did it. Of course you
can [check out the talk on a live
website](http://www.cfa.harvard.edu/~pwilliam/htmltalk/).

The actual talk was a colloquium at [Bucknell
University](http://www.bucknell.edu/), aimed primarily at physics
undergraduates with a 45-minute run time. It was given on September 19, 2013.

## The basic rundown

The presentation is built on a great little framework called
[reveal.js](http://lab.hakim.se/reveal-js/). It worked out really well for
my needs. It’s [on Github too](https://github.com/hakimel/reveal.js).

What are some of the key features that make this viable for scientific
talks, at least the kind that I give?

* **Easy support for embedded math** using [MathJax](http://www.mathjax.org/)
* **Good support for PDF plots** using
  [pdf.js](http://mozilla.github.io/pdf.js/)
* **A nice “presenter console” mode** built into ``reveal.js``.
* **Support for exporting as a PDF** (just in case …) also built
  into ``reveal.js``.

What are the advantages?

* Much faster to edit presentation, reorder slides, etc: all done in text. This
  may not sound super significant, but all I can say is that compared to Impress,
  for me the experience was **vastly** more pleasant.
* I’m very happy with the look of the talk. The typography is much better than
  what I could ever bother to achieve with LibreOffice.
* Possibly more portable across machines than some aspects of PowerPoint-type
  presentations.
* I feel much more confident in doing video and fancy effects in a web
  browser than LibreOffice.
* Possibility to build in **truly** fancy effects with interactive
  JavaScript doodads. To be investigated in the future …
* Development of the presentation can be tracked in a version control
  system such as [Git](http://git-scm.com/).

What are the disadvantages?

* Layout and styling using HTML and CSS are difficult and annoying for normal
  people. The Firefox inspector tools helped greatly. Really, only a few
  tricks are necessary for standard slide layouts, but I suspect that this
  will be a dealbreaker for folks without web experience.
* You need to be careful about not relying on network resources for your
  slide content … unless you’re sure that the computer using your talk will
  always have a good Internet connection.
* Media assets may need format conversion. I had to transcode my videos to
  [WebM](http://www.webmproject.org/) format, and even though ``pdf.js``
  works well, I ended up converting my PDFs to SVG since they render more
  easily.
* You need to remake all of your existing slides, of course.

What are the novel aspects of this particular presentation?

* Customized theme that I think is pretty nice. (But I would, wouldn’t I?)
* Small ``reveal.js`` plugin to interface with ``pdf.js`` easily.
* Small ``reveal.js`` plugin to autostart a movie when its slide is shown.
* Hacked ``reveal.js`` MathJax plugin to size things more nicely (not
  generically useful, probably).
* iframe example to show embedding of a website in the presentation.
* Use of Git submodules to include JS libraries.
* Downloaded copies of Google Web Fonts to avoid needing web access
  while presenting.

What tools were helpful for making this presentation?

* [Git](http://git-scm.com/) for version control.
* Good knowledge of Emacs for efficient HTML editing.
* Keyboard compose key and Greek layout for fast entry of non-ASCII symbols.
* Significant background information plus Firefox web developer tools and
  reference information for getting the various HTML and CSS things to work.
* [pdftocairo](http://poppler.freedesktop.org/) for converting PDFs to SVGs.
* [Transmaggedon](http://www.linuxrising.org/) for transcoding videos to WebM.
* [PiTiVi](http://www.pitivi.org/) for mild editing of YouTube videos.
* [My setup for extracting
  figures](http://newton.cx/~peter/2012/10/extracting-pdf-figures-as-pdfs-in-linux/)
  from PDFs, as PDFs, on Linux.

“Should I try using this, or stick with LibreOffice Impress / PowerPoint / Keynote?”

* After reading all of the above, you probably can tell what the right
  answer is for you. All I can say is that if you hate Impress, HTML might
  be an easier and nicer option than you might think. I was **extremely**
  happy with how easy it was to put together an attractive set of slides
  that looked the way I wanted … but I have a ton of background knowledge
  that made that process easier for me than it will be for most people.

## Testing a local copy

To test out the slides on your local machine:

1. Clone this repository.
2. Enter the directory and fetch the dependent libraries
   with ``git submodule update --init``.
3. Download and unpack what I call the “assets”, the various large graphics
  and video files. [Here’s a zipfile of the
  assets](https://www.cfa.harvard.edu/~pwilliam/htmltalk/htmltalk-assets.zip)
  (113 MB).
4. Finally, ``firefox ./slides.html``.

I tested this only on Firefox, though you need to use Chrome for PDF export
(see below). I’m not to keen to get into browser compatibility testing, so I
hope it works for you, but no guarantees.

### Exporting the presentation in PDF

This is a bit of a hassle but is possible. Huzzah! See also the instructions
provided with ``reveal.js``.

1. Open the presentation in Google Chrome, launching Chrome with
   the flag ``--allow-file-access-from-files``.
2. Edit the URL to end with the query ``?print-pdf``.
3. Print with ``Ctrl-P`` as usual. Various options may need to be set:
  - *Destination* to *Save as PDF*
  - *Layout* to *Landscape*
  - *Margins* to *None*
  - *Background colors and images* option *enabled*
4. Save it.

### Bare-bones template

The ``skeleton`` branch removes a few nonessential files and content specific
to this talk, leaving a bare-bones template upon which new talks can be built.
